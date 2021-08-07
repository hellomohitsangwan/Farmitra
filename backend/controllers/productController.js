import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

// @desc  Fetch all products
// @route Get /api/products
// @access Public
const getProducts = asyncHandler(async (req, res) => {
  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: "i",
        },
      }
    : {};
  const product = await Product.find({ ...keyword });
  res.json(product);
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
    req.body;
  // res.json(req.body);
  const product = await Product.findById(req.params.id);

  if (product) {
    product.name = name;
    product.price = price;
    product.description = description;
    product.category = category;
    product.countInStock = countInStock;
    product.image = image;
    product.brand = brand;

    const updatedProduct = product.save();
    res.status(201).json(product);
  } else {
    res.status(404);
    throw new Error("product not found");
  }
});

// @desc  Create single product
// @route PUT /api/products
// @access Admin protected
const createProduct = asyncHandler(async (req, res) => {
  const product = new Product({
    name: "sample name",
    price: 10,
    user: req.user._id,
    image: "/images/sample.jpeg",
    brand: "samle brand",
    category: "samle category",
    countInStock: 2,
    numReviews: 0,
    description: "sample description",
  });
  const createdProduct = await product.save();
  res.json(createdProduct);
});

export {
  getProducts,
  getProductById,
  deleteProduct,
  updateProduct,
  createProduct,
};
