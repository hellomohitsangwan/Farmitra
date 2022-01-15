import express from "express";
import { chatBotController} from "../controllers/chatBotController.js";
const router = express.Router();

router.route("/").post(chatBotController)
export default router;