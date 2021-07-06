import express from "express";
const router = express.Router();
import {
  authUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
  getUsers,
  deleteUSer,
} from "../controllers/userController.js";
import { adminMiddleware, protect } from "../middleware/authMiddleware.js";

router.route("/").post(registerUser).get(protect, adminMiddleware, getUsers);
router.post("/login", authUser);
router.route("/profile").get(protect, getUserProfile);
router.route("/:id").delete(protect, adminMiddleware, getUserProfile);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

export default router;
