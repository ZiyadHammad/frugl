import axios from "axios";
import * as cheerio from "cheerio";

import { extractDesc, extractOriginalPrice } from "../utils/amazonParser.js";

export const scrapeAmazonProduct = async (url) => {
  if (!url) return "No url provided to scrape";

  const brightDataConfig = {
    auth: {
      username: `${String(process.env.BRIGHT_DATA_USERNAME)}-session-${
        (1000000 * Math.random()) | 0
      }`,
      password: String(process.env.BRIGHT_DATA_PASSWORD),
    },
    host: "brd.superproxy.io",
    port: 22225,
    rejectUnauthorized: false,
  };

  try {
    const response = await axios.get(url, brightDataConfig);
    const $ = cheerio.load(response.data);

    const title = $("#productTitle").text().trim();
    const centsAmount = $(".a-price span.a-price-fraction")
      .text()
      .trim()
      .substring(0, 2);
    const images =
      $("#landingImage").attr("data-a-dynamic-image") ||
      $(".a-button-text > img").attr("src") ||
      "{}";
    const imageUrls = Object.keys(JSON.parse(images));
    const discountRate = $(".a-section span.savingsPercentage")
      .text()
      .trim()
      .replace(/[-%]/g, "")
      .substring(0, 2);
    const currency = $(".a-price-symbol").text().trim()[0];
    const currentPrice = $(".aok-align-center span.a-price-whole")
      .text()
      .trim()
      .split(".")[0];
    const outOfStock =
      $("#availability span").text().trim().toLowerCase() ===
      "currently unavailable";

    const description = extractDesc($);
    const originalPrice = extractOriginalPrice(
      $("#priceblock_ourprice"),
      $(".a-price.a-text-price span.a-offscreen"),
      $("#listPrice"),
      $("#priceblock_dealprice"),
      $(".a-size-base.a-color-price")
    );

    const data = {
      title,
      image: imageUrls[0],
      originalPrice: Number(originalPrice),
      currentPrice: Number(currentPrice),
      centsAmount: Number(centsAmount),
      discountRate: Number(discountRate),
      currency: currency || "$",
      isOutOfStock: outOfStock,
      category: "category",
      priceHistory: [],
      reviewsCount: 100,
      stars: 4.5,
      lowestPrice: Number(currentPrice) || Number(originalPrice),
      highestPrice: Number(originalPrice) || Number(currentPrice),
      averagePrice: Number(currentPrice) || Number(originalPrice),
      url,
      description,
    };

    return data;
  } catch (error) {
    throw new Error(`Failed attempting to scrape. Error: ${error.message}`);
  }
};