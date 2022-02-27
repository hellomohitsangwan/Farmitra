import path from "path";
import express from "express";
import products from "./data/products.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";
import recommendationRoutes from "./routes/recommendationRoutes.js"
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import { protect } from "./middleware/authMiddleware.js";
import Razorpay from "razorpay";
import Order from "./models/orderModel.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import chatBotRoutes from "./routes/chatBotRoutes.js"
import cloudinary from "cloudinary";
import morgan from "morgan";
// import bodyparser from "body-parser";
import fileUpload from "express-fileupload";
// const cloudinary = require("cloudinary");
// import cookieVerifyRoute from "./routes/cookieVerifyRoute.js";
// import cookieParser from "cookie-parser";
import User from "./models/userModel.js";
import Recommendation from "./models/recommendationModel.js";
import { RAZORPAY_ID, RAZORPAY_SECRET } from "./secrets/razorpay.js";
import Product from "./models/productModel.js";

var razorpay = new Razorpay({
  key_id: RAZORPAY_ID,
  key_secret: RAZORPAY_SECRET,
});
dotenv.config();
const app = express();
// app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'))
app.use(fileUpload());
cloudinary.config({
  cloud_name: "djfh8ecu4",
  api_key: "329259279517943",
  api_secret: "SZ9Bp_Tln70t0lCJGv54PrX-lP0",
});
// app.use(cookieParser());
connectDB();
app.get("/api/delete" , async(req , res) => {
  const ress = await Order.deleteMany({});
  res.json(ress)
})
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/recom" , recommendationRoutes);
app.use("/api/chatbot" , chatBotRoutes)
app.use("/api/blogs",blogRoutes);
const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("home route");
  });
}

// app.get("/api/config/razorpay", protect, (req, res) => {
//   res.send(RAZORPAY_ID);
// });

app.post("/api/razorpay", protect, async (req, res) => {
  const orderID = req.body.orderid;
  const order = await (
    await Order.findById(orderID)
  ).populate("user", "name email");
  const create = {
    amount: Math.floor(order.totalPrice * 100),
    currency: "INR",
    payment_capture: 1,
  };
  try {
    const response = await razorpay.orders.create(create);
    // console.log(response, " ", create.amount);
    res.send(RAZORPAY_ID);
  } catch (error) {
    // console.log(error);
  }
});



// app.use("/api", cookieVerifyRoute);

//middleware routes
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`server started in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
