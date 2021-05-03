import express from "express";
import products from "./data/products.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
dotenv.config();
const app = express();
connectDB();
app.get("/", (req, res) => {
  res.send("home route");
});
app.use("/api/products", productRoutes);
// app.get("/api/products", (req, res) => {
//   res.json(products);
// });
// app.get("/api/products/:id", (req, res) => {
//   const product = products.find((p) => p._id === req.params.id);
//   res.json(product);
// });
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`server started in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
