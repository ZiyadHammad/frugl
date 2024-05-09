import express from "express";
import {
  getItems,
  getItemById,
  deleteItem,
  updateItem,
  createItem,
} from "../controllers/itemController.js";

const router = express.Router();

router.get("/", getItems);
router.get("/:id", getItemById);
router.post("/new", createItem);
router.put("/:id", updateItem);
router.delete("/:id", deleteItem);

export default router;