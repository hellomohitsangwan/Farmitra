import express from "express";
import {
  getProductById,
  getProducts,
  deleteProduct,
  updateProduct,
  createProduct,
  getProductsOfFarmer,
  createProductReview
} from "../controllers/productController.js";
import { adminMiddleware, protect } from "../middleware/authMiddleware.js";
const router = express.Router();

//same meaning
// router.route("/").get(getProducts)  === router.get("/" , getProducts)
router
  .route("/")
  .get(getProducts)
  .post(protect, adminMiddleware, createProduct);
router.route("/myproducts").get(protect, getProductsOfFarmer);
router.route('/:id/reviews').post(protect, createProductReview)
router
  .route("/:id")
  .get(getProductById)
  .delete(protect, adminMiddleware, deleteProduct)
  .put(protect, adminMiddleware, updateProduct);

export default router;
