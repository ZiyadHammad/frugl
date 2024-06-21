import express from "express";
import {
  login,
  register,
  logout,
  getUser,
  updateUser,
  deleteUser,
  validateUser,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Public
router.post("/login", login);
router.post("/register", register);

// Private
router.post("/logout", protect, logout);
router.post("/validate", protect, validateUser);
router
  .route("/profile")
  .get(protect, getUser)
  .put(protect, updateUser)
  .delete(protect, deleteUser);

export default router;
