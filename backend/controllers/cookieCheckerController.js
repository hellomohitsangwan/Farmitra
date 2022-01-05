import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
export const checkToken = asyncHandler(async (req, res) => {
  // const user = await User.findById(req.user._id);
  // if (user && req.token) {
  //   res.json({
  //     _id: user._id,
  //     name: user.name,
  //     email: user.email,
  //     isAdmin: user.isAdmin,
  //     token: req.token,
  //     isToken: true,
  //   });
  // } else {
  //   res.json({
  //     isToken: false,
  //     jwtToken: null,
  //     token: req.token,
  //   });
  // }
});
export const clearCookies = asyncHandler(async (req, res) => {
  res.clearCookie("jwToken");
  res.status(200).send("cookie cleared");
});
