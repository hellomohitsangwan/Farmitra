import asyncHandler from "express-async-handler";
import Blogs from "../models/blogsModel.js";

// @desc  Creates a new blog
// @route POST /api/blogs
// @access Public
export const createBlog = asyncHandler(async (req, res) => {
    req.body.user = req.user._id;
    const blog = await Blogs.create(req.body);
    res.status(201).json({
    success: true,
    blog,
  });
})

// @desc  gets all blog
// @route GET /api/blogs
// @access Public
export const getBlogs = asyncHandler(async (req, res) => {
    res.json({"data" : "How are you"});
})

// @desc  gets all blog
// @route GET /api/blogs/:id
// @access Public
export const getBlogByID = asyncHandler(async (req, res) => {
    res.json({"data" : req.params.id});
})
