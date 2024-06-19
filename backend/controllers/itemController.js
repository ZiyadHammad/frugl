import Items from "../models/itemSchema.js";
import asyncHandler from "express-async-handler";

import { scrapeAmazonItem } from "../scraper/scrapeAmazon.js";

// @desc Create new Item
// @route POST /api//Items/new
// @access Private
export const createItem = asyncHandler(async (req, res) => {
  const { url } = req.body;
  console.log(url)

  try {
    const itemDetails = await scrapeAmazonItem(url);

    if (itemDetails) {
      // Associating the logged in userId to the Item object
      itemDetails.userId = req.user._id;

      const item = await Items.create(itemDetails);
      res.status(201).json(item);
    }
  } catch (error) {
    throw new Error(`Error: ${error.message}`);
  }
});

// @desc Get All Items
// @route GET /api/items
// @access Private
export const getItems = asyncHandler(async (req, res) => {
  try {
    const items = await Items.find({ userId: req.user._id });

    if (!items) {
      res.status(404);
      throw new Error("No Items Found");
    }

    res.status(200).json(items);
  } catch (error) {
    res.status(500);
    throw new Error(`Error: ${error.message}`);
  }
});

// @desc Get Item by Id
// @route GET /api//Items/:id
// @access Private
export const getItemById = asyncHandler(async (req, res) => {
  try {
    const item = await Items.findById(req.params.id);

    if (!item) {
      res.status(404);
      throw new Error("Item not found");
    }

    if (item.userId.toString() !== req.user._id.toString()) {
      res.status(403);
      throw new Error("Unauthorized access to this item");
    }

    res.status(200).json({
      item
    });
  } catch (error) {
    res.status(500);
    throw new Error(`Error: ${error.message}`);
  }
});

// @desc update item by id
// @route PUT /api//Items/:id
// @access Private
export const updateItemTitle = asyncHandler(async (req, res) => {
  const item = await Items.findById(req.params.id);

  if (!item) {
    res.status(404);
    throw new Error(`Item not found.`);
  }

  item.title = req.body.title || item.title;

  res.status(200).json({
    message: "Title updated!",
    title: item.title,
  });
});

// @desc delete item by id
// @route DELETE /api//Items/:id
// @access Private
export const deleteItem = asyncHandler(async (req, res) => {
  const itemId = req.params.id;
  
  const item = await Items.findById(itemId);

  if (!item) {
    res.status(404);
    throw new Error(`Item not found.`);
  }

  if (item.userId.toString() !== req.user._id.toString()) {
    res.status(403);
    throw new Error("Unauthorized access to this item");
  }

  await Items.findByIdAndDelete(itemId);

  res.status(200).json({
    message: "Item deleted successfully.",
    title: `${item.title} has been deleted`
   });

});