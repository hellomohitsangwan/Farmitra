import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";
import cloudinary from "cloudinary";
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

// @desc  Fetch all products farmer created
// @route Get /api/products/myproducts
// @access Private and only farmer
const getProductsOfFarmer = asyncHandler(async (req, res) => {
  const products = await Product.find({user: req.user._id});
  res.json(products);
})
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
  // const { name, price, description, image, brand, category, countInStock } =
  //   req.body;
  // // res.json(req.body);
  // const product = await Product.findById(req.params.id);

  // if (product) {
  //   product.name = name;
  //   product.price = price;
  //   product.description = description;
  //   product.category = category;
  //   product.countInStock = countInStock;
  //   product.image = image;
  //   product.brand = brand;

  //   const updatedProduct = product.save();
  //   res.status(201).json(product);
  // } else {
  //   res.status(404);
  //   throw new Error("product not found");

  let product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }

  let images = [];
  if (typeof req.body.images === "string") {
    images.push(req.body.images);
  } else {
    images = req.body.images;
  }

  if (images !== undefined) {
    // Deleting images associated with the product
    for (let i = 0; i < product.images.length; i++) {
      const result = await cloudinary.v2.uploader.destroy(
        product.images[i].public_id
      );
    }

    let imagesLinks = [];

    for (let i = 0; i < images.length; i++) {
      const result = await cloudinary.v2.uploader.upload(images[i], {
        folder: "products",
      });

      imagesLinks.push({
        public_id: result.public_id,
        url: result.secure_url,
      });
    }

    req.body.images = imagesLinks;
  }

  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    product,
  });
});

// @desc  Create single product
// @route PUT /api/products
// @access Admin protected
const createProduct = asyncHandler(async (req, res, next) => {
  // const product = new Product({
  //   name: "sample name",
  //   price: 10,
  //   user: req.user._id,
  //   image: "/images/sample.jpeg",
  //   brand: "samle brand",
  //   category: "samle category",
  //   countInStock: 2,
  //   numReviews: 0,
  //   description: "sample description",
  //   images: [
  //     {
  //       public_id: "products/wmoa49q9e70ze9xtcra2",
  //       url: "https://res.cloudinary.com/bookit/image/upload/v1606293153/products/wmoa49q9e70ze9xtcra2.jpg",
  //     },
  //     {
  //       public_id: "products/i0k1wdwi5hrpmzwxvsds",
  //       url: "https://res.cloudinary.com/bookit/image/upload/v1606293152/products/i0k1wdwi5hrpmzwxvsds.jpg",
  //     },
  //     {
  //       public_id: "products/bshmuo9qisfhz4azvnsd",
  //       url: "https://res.cloudinary.com/bookit/image/upload/v1606293153/products/bshmuo9qisfhz4azvnsd.jpg",
  //     },
  //   ],
  // });
  // const createdProduct = await product.save();
  // res.json(createdProduct);

  let images = [];
  if (typeof req.body.images === "string") {
    images.push(req.body.images);
  } else {
    images = req.body.images;
  }

  let imagesLinks = [];

  for (let i = 0; i < images.length; i++) {
    const result = await cloudinary.v2.uploader.upload(images[i], {
      folder: "products",
    });

    imagesLinks.push({
      public_id: result.public_id,
      url: result.secure_url,
    });
  }

  req.body.images = imagesLinks;
  req.body.user = req.user._id;

  const product = await Product.create(req.body);

  res.status(201).json({
    success: true,
    product,
  });
});

export {
  getProducts,
  getProductById,
  deleteProduct,
  updateProduct,
  createProduct,
  getProductsOfFarmer
};
