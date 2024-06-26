import express from "express";
import {
  getProducts,
  getProductById,
  deleteProduct,
  updateProductTitle,
  createProduct,
} from "../controllers/productController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", protect, getProducts);
router.get("/:id", protect, getProductById);
router.post("/new", protect, createProduct);
router.put("/:id", protect, updateProductTitle);
router.delete("/:id", protect, deleteProduct);

export default router;