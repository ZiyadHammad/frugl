import asyncHandler from "express-async-handler";
import genToken from "../utils/genToken.js";
import Users from "../models/userModel.js";

// @desc Register a new user
// @route POST /api/users/register
// @access Public
export const register = asyncHandler(async (req, res) => {
  const { email, password, firstName, lastName } = req.body;

  const userExists = await Users.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User Already exists");
  }

  // Initializing user and saving user to database
  const user = await Users.create({
    firstName,
    lastName,
    email,
    password,
  });

  if (user) {
    genToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(500);
    throw new Error("Internal Error");
  }
});

// @desc Login user/setToken
// @route POST /api/users/login
// @access Public
export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error("Bad Request: All fields must be filled.");
  }

  const user = await Users.findOne({ email });

  if (!user) {
    res.status(404);
    throw new Error("No user found with that email");
  }

  if (user && (await user.matchPassword(password))) {
    genToken(res, user._id);
    res.status(200).json({
      message: "Logged in Succeesfully.",
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(401);
    throw new Error("Password invalid");
  }
});

// @desc logout a new user
// @route POST /api/users/logout
// @access Private
export const logout = asyncHandler(async (req, res) => {
  // destroy cookie
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0), // expires right away
  });

  console.log(`User ID: logged out successfully`)

  res.status(200).json({ message: "Logged out successfully." });
});

// @desc Get user data
// @route GET /api/users/profile
// @access Private
export const getUser = asyncHandler(async (req, res) => {
  if (!req.user._id) {
    res.status(404);
    throw new Error(`User is not authenticated. ${error.message}`);
  }

  const user = {
    auth: true,
    message: 'User is authenticated',
    id: req.user._id,
    name: `${req.user.firstName} ${req.user.lastName}`,
    email: req.user.email,
  };

  res.status(200).json(user);
});

// @desc Update user data
// @route PUT /api/users/profile
// @access Private
export const updateUser = asyncHandler(async (req, res) => {
  // req.user does not have password so we are fetching the user data including the password frm db
  const user = await Users.findById(req.user._id);

  if (user) {
    (user.firstName = req.body.firstName || user.firstName),
      (user.lastName = req.body.lastName || user.lastName),
      (user.email = req.body.email || user.email),
      (user.password = req.body.password ? req.body.password : user.password);

    const updatedUser = await user.save(user);
    res.status(200).json({
      message: "Success",
      _id: updatedUser._id,
      firstName: updatedUser.firstName,
      lastName: updatedUser.lastName,
      email: updatedUser.email,
    });
  } else {
    res.status(404).json({ message: "User not found" });
  }
});
