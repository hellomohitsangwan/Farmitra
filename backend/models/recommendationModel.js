import mongoose from "mongoose";

const recommendationSchema = mongoose.Schema(
  {
    from: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    to: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User"
    },
    recommendations: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Recommendation = mongoose.model("Recommendation", recommendationSchema);

export default Recommendation;
