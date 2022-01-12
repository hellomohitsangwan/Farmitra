import express from "express";
import { createRecommendation } from "../controllers/recommendationController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").post(protect , createRecommendation)

export default router