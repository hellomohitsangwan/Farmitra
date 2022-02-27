import mongoose from "mongoose";


const reviewSchema = mongoose.Schema(
    {
      name: { type: String, required: true },
      rating: { type: Number, required: true },
      comment: { type: String, required: true },
      user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
      },
    },
    {
      timestamps: true,
    }
  )

const blogsSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    topic: {
      type: String,
      required: true,
    },
    content: {
        type:String,
        required:true
    },
    reviews: [reviewSchema],
    rating: {
      type: Number,
      // required: true,
      default: 0,
    },
    numReviews: {
      type: Number,
      // required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Blogs = mongoose.model("blogs", blogsSchema);

export default Blogs;
