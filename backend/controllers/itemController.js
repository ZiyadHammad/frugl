import Items from "../models/itemSchema.js";
import asyncHandler from "express-async-handler";

import { scrapeAmazonItem } from "../scraper/scrapeAmazon.js";

// @desc Create new Item
// @route POST /api//Items/new
// @access Private
export const createItem = asyncHandler(async (req, res) => {
  const { url } = req.body;

  try {
    const itemDetails = await scrapeAmazonItem(url);

    if (itemDetails) {
      // Associating the logged in userId to the Item object 
      itemDetails.userId = req.user._id

      const item = await Items.create(itemDetails) 
      res.status(201).json(item);
    }
  } catch (error) {
    throw new Error(
      "Something went wrong when trying to scrape that item from Amazon."
    );
  }
});

// @desc Get All Items
// @route GET /api/items
// @access Private
export const getItems = asyncHandler(async (req, res) => {
  res.json({ message: "Get Items" });
});

// @desc Get Item by Id
// @route GET /api//Items/:id
// @access Private
export const getItemById = asyncHandler(async (req, res) => {
  res.json({ message: "Get item by id" });
});

// @desc delete item by id
// @route DELETE /api//Items/:id
// @access Private
export const deleteItem = asyncHandler(async (req, res) => {
  res.json({ message: "delete item by id" });
});

// @desc update item by id
// @route PUT /api//Items/:id
// @access Private
export const updateItem = asyncHandler(async (req, res) => {
  res.json({ message: "update item by id" });
});
