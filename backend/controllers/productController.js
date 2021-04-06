import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

// @desc  Fetch all products
// @route Get /api/products
// @access Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

// @desc  Fetch single products
// @route Get /api/products/:id
// @access Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "product not found" });
  }
});

// @desc  Fetch single products
// @route Get /api/products/:id
// @access Admin protected
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    await product.remove();
    res.json({ message: "product removed successfully" });
  } else {
    res.status(404);
    throw new Error("product not found");
  }
});

// @desc  Edit single product
// @route PUT /api/products/:id
// @access Admin protected
const updateProduct = asyncHandler(async (req, res) => {
  const { name, price, description, image, brand, category, countInStock } =
    req.Body;
  const product = await Product.findById(req.params.id);

  if (product) {
    product.name = name;
    product.price = price;
    product.description = description;
    product.category = category;
    product.countInStock = countInStock;
    product.image = image;
    product.brand = brand;

    const createdProduct = Product.save();
    res.status(201).json(product);
  } else {
    res.status(404);
    throw new Error("product not found");
  }
});

export { getProducts, getProductById, deleteProduct, updateProduct };
