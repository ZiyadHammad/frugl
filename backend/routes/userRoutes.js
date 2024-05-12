import express from "express";
import {
  login,
  register,
  logout,
  getUser,
  updateUser,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Public
router.post("/login", login);
router.post("/register", register);
router.post("/logout", logout);

// Private
router.route("/profile").get(protect, getUser).put(protect, updateUser);

export default router;