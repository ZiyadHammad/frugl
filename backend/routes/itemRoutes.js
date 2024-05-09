import express from "express";
import {
  getItems,
  getItemById,
  deleteItem,
  updateItemTitle,
  createItem,
} from "../controllers/itemController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", protect, getItems);
router.get("/:id", protect, getItemById);
router.post("/new", protect, createItem);
router.put("/:id", protect, updateItemTitle);
router.delete("/:id", protect, deleteItem);

export default router;