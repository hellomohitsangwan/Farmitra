import asyncHandler from "express-async-handler";
import Recommendation from "../models/recommendationModel.js";
import User from "../models/userModel.js";

export const createRecommendation = asyncHandler(async (req, res) => {
  const { recommendation,  farmer_id } = req.body;

  const recomExists = await Recommendation.findOne({from : req.user._id});
  const user = await User.findById(req.user._id);
  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }
  if (recomExists && user) {
      console.log(recomExists);
    res.status(448);
    throw new Error("You've already posted recommendation,thanks");
  }
  if (!recomExists && user) {
      console.log("ca")
    const newRecom = await Recommendation.create({
      from: req.user._id,
      to: farmer_id,
      recommendations: recommendation,
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


// get all recomdation made to farmers by ngos
export const listRecForFarmer = asyncHandler(async (req , res) => {

    const recoms = await Recommendation.find({to : req.user._id});
    let farmers = []
    for (let i = 0; i < recoms.length; i++) {
        const uid = recoms[i].from;
        const user = await User.findById(uid).select("-password")
        farmers.push({user  , suggestion : recoms[i].recommendations})
        }
    if(recoms) {
        res.json(farmers)
    } else {
        res.status(401);
        res.json("Bad request")
    }
})