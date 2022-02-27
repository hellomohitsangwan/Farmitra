import express from "express";
const router = express.Router();

import{
    createBlog,
    getBlogs,
    getBlogByID
}from "../controllers/blogController.js";
import { adminMiddleware, protect } from "../middleware/authMiddleware.js";

router
    .route("/")
    .post(protect,adminMiddleware,createBlog)
    .get(getBlogs);
router.
    route("/:id")
    .get(getBlogByID);
    
export default router;