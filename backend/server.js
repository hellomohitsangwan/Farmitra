import express from "express";
import products from "./data/products.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import { protect } from "./middleware/authMiddleware.js";
import Razorpay from "razorpay";
import Order from "./models/orderModel.js";
// import cookieVerifyRoute from "./routes/cookieVerifyRoute.js";
// import cookieParser from "cookie-parser";

import { RAZORPAY_ID, RAZORPAY_SECRET } from "./secrets/razorpay.js";
var razorpay = new Razorpay({
  key_id: RAZORPAY_ID,
  key_secret: RAZORPAY_SECRET,
});

dotenv.config();
const app = express();
app.use(express.json());

// app.use(cookieParser());
connectDB();
app.get("/", (req, res) => {
  res.send("home route");
});
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);

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
    console.log(response, " ", create.amount);
    res.send(RAZORPAY_ID);
  } catch (error) {
    console.log(error);
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
