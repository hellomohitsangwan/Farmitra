import express from "express";
import {
  getProductById,
  getProducts,
  deleteProduct,
  updateProduct,
} from "../controllers/productController.js";
import { adminMiddleware, protect } from "../middleware/authMiddleware.js";
const router = express.Router();

//same meaning
// router.route("/").get(getProducts)  === router.get("/" , getProducts)
router.route("/").get(getProducts);
router
  .route("/:id")
  .get(getProductById)
  .delete(protect, adminMiddleware, deleteProduct)
  .put(protect, adminMiddleware, updateProduct);

export default router;
