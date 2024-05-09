import asyncHandler from "express-async-handler";
import Users from "../models/userModel.js";

// @desc Login/Auth user/setToken
// @route POST /api/users/login
// @access Public
export const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: "You suck bro" });
});

// @desc Register a new user
// @route POST /api/users/register
// @access Public
export const registerUser = asyncHandler(async (req, res) => {
  res.json({ message: "You suck bro" });
});

// @desc logoutUser a new user
// @route POST /api/users/logout
// @access Private
export const logoutUser = asyncHandler(async (req, res) => {
  res.json({ message: "You suck bro" });
});

// @desc logoutUser a new user
// @route GET /api/users/profile
// @access Private
export const getUser = asyncHandler(async (req, res) => {
  res.json({ message: "You suck bro" });
});

// @desc logoutUser a new user
// @route PUT /api/users/profile
// @access Private
export const updateUser = asyncHandler(async (req, res) => {
  res.json({ message: "You suck bro" });
});