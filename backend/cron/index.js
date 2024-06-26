import Products from '../models/productModel'
import asyncHandler from "express-async-handler";
import { scrapeAmazonProduct } from "../scraper/scrapeAmazon.js";
import { getAveragePrice, getEmailNotifType, getHighestPrice, getLowestPrice } from '../amazonParser'

export const updateAllProductsCron = asyncHandler(async(req) => {

  try {

    const products = await Products.find({});

    if (!products) throw new Error("No product fetched");

    // ======================== 1 SCRAPE LATEST PRODUCT DETAILS & UPDATE DB
    const updatedProducts = await Promise.all(
      products.map(async (currentProduct) => {
        // Scrape product
        const scrapedProduct = await scrapeAmazonProduct(currentProduct.url);

        if (!scrapedProduct) return;

        const updatedPriceHistory = [
          ...currentProduct.priceHistory,
          {
            price: scrapedProduct.currentPrice,
          },
        ];

        const product = {
          ...scrapedProduct,
          priceHistory: updatedPriceHistory,
          lowestPrice: getLowestPrice(updatedPriceHistory),
          highestPrice: getHighestPrice(updatedPriceHistory),
          averagePrice: getAveragePrice(updatedPriceHistory),
        };

        // Update Products in DB
        const updatedProduct = await Products.findOneAndUpdate(
          {
            url: product.url,
          },
          product
        );

        // ======================== 2 CHECK EACH PRODUCT'S STATUS & SEND EMAIL ACCORDINGLY
        const emailNotifType = getEmailNotifType(
          scrapedProduct,
          currentProduct
        );

        if (emailNotifType && updatedProduct.users.length > 0) {
          const productInfo = {
            title: updatedProduct.title,
            url: updatedProduct.url,
            image: updatedProduct.image
          };
          // Construct emailContent
          const emailContent = await generateEmailBody(productInfo, emailNotifType);
          // Get array of user emails
          const userEmails = updatedProduct.users.map((user) => user.email);
          // Send email notification
          await sendEmail(emailContent, userEmails, productInfo);
        }

        return updatedProduct;
      })
    );

  } catch (error) {
    
  }
})
