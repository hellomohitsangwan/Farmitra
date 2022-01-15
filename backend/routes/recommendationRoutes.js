import express from "express";
import { createRecommendation, listRecForFarmer } from "../controllers/recommendationController.js";
import { adminMiddleware, protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").post(protect , createRecommendation)
router.route("/myrec").get(protect , adminMiddleware , listRecForFarmer)
export default router