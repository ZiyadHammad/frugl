import express from "express";
import {
  loginUser,
  registerUser,
  logoutUser,
  getUser,
  updateUser,
} from "../controllers/userController.js";
const router = express.Router();

router.post("/login", loginUser);
router.post("/register", registerUser);
router.post("/logout", logoutUser);
router.route("/profile").get(getUser).put(updateUser);

export default router;