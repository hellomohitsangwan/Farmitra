import express from "express";
import { chatBotController} from "../controllers/chatBotController";
const router = express.Router();

router.route("/").post(chatBotController)
export default router;