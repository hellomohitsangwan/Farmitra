import express from "express";
import products from "./data/products.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

// import cookieVerifyRoute from "./routes/cookieVerifyRoute.js";
// import cookieParser from "cookie-parser";

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
// app.use("/api", cookieVerifyRoute);
//middleware routes
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`server started in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
