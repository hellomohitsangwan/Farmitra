import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

// @desc  Auth. user
// @route POST /api/users/auth
// @access Public
export const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && user.matchPassword(password)) {
    //if successfully logged in then the token will be save d in cookie
    res.cookie("jwToken", generateToken(user._id), {
      expires: new Date(Date.now() + 25892000000),
      httpOnly: true,
    });
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("invalid email or password");
  }
});
// @desc  Register user
// @route POST /api/users
// @access Public
export const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }
  const user = await User.create({
    name,
    email,
    password,
  });
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user details");
  }
});

// @desc  get user profile
// @route POST /api/users/profile
// @access Public
export const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});
