import Products from "../models/productModel.js";
import asyncHandler from "express-async-handler";
import { scrapeAmazonProduct } from "../scraper/scrapeAmazon.js";

// @desc Create new Product
// @route POST /api//Products/new
// @access Private
export const createProduct = asyncHandler(async (req, res) => {
  const { url } = req.body;
  console.log(url)

  try {
    const productDetails = await scrapeAmazonProduct(url);

    if (productDetails) {
      // Associating the logged in userId to the Product object
      productDetails.userId = req.user._id;

      const product = await Products.create(productDetails);
      res.status(201).json(product);
    }
  } catch (error) {
    throw new Error(`Error: ${error.message}`);
  }
});

// @desc Get All Products
// @route GET /api/products
// @access Private
export const getProducts = asyncHandler(async (req, res) => {
  try {
    const products = await Products.find({ userId: req.user._id });

    if (!products) {
      res.status(404);
      throw new Error("No Products Found");
    }

    res.status(200).json(products);
  } catch (error) {
    res.status(500);
    throw new Error(`Error: ${error.message}`);
  }
});

// @desc Get Product by Id
// @route GET /api//Products/:id
// @access Private
export const getProductById = asyncHandler(async (req, res) => {
  try {
    const product = await Products.findById(req.params.id);

    if (!product) {
      res.status(404);
      throw new Error("Product not found");
    }

    if (product.userId.toString() !== req.user._id.toString()) {
      res.status(403);
      throw new Error("Unauthorized access to this product");
    }

    res.status(200).json({
      product
    });
  } catch (error) {
    res.status(500);
    throw new Error(`Error: ${error.message}`);
  }
});

// @desc update product by id
// @route PUT /api//Products/:id
// @access Private
export const updateProductTitle = asyncHandler(async (req, res) => {
  const product = await Products.findById(req.params.id);

  if (!product) {
    res.status(404);
    throw new Error(`Product not found.`);
  }

  product.title = req.body.title || product.title;

  res.status(200).json({
    message: "Title updated!",
    title: product.title,
  });
});

// @desc delete product by id
// @route DELETE /api//Products/:id
// @access Private
export const deleteProduct = asyncHandler(async (req, res) => {
  const productId = req.params.id;
  console.log(req.params.id)
  const product = await Products.findById(productId);

  if (!product) {
    res.status(404);
    throw new Error(`Product not found.`);
  }

  if (product.userId.toString() !== req.user._id.toString()) {
    res.status(403);
    throw new Error("Unauthorized access to this product");
  }

  await Products.findByIdAndDelete(productId);

  res.status(200).json({
    message: "Product deleted successfully.",
    title: `${product.title} has been deleted`
   });

});