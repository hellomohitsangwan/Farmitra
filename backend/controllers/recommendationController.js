import asyncHandler from "express-async-handler";
import Recommendation from "../models/recommendationModel.js";
import User from "../models/userModel.js";

export const createRecommendation = asyncHandler(async (req, res) => {
  const { recommendation, user_id, farmer_id } = req.body;

  const recomExists = await Recommendation.find({ from: user_id });
  const user = await User.findById(user_id);
  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }
  if (recomExists && user) {
    res.status(448);
    throw new Error("You've already posted recommendation,thanks");
  }
  if (!recomExists && user) {
    const newRecom = await Recommendation.create({
      from: user_id,
      to: farmer_id,
      recommendation: recommendation,
    });
    if (newRecom) {
      res.status(201).json({
        msg: "Thanks for your recommendation",
      });
    } else {
        res.status(400);
        throw new Error("invalid details")
    }
  }
});
