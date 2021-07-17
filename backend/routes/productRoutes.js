import express from "express";
import {
  getProductById,
  getProducts,
  deleteProduct,
} from "../controllers/productController.js";
import { adminMiddleware, protect } from "../middleware/authMiddleware.js";
const router = express.Router();

//same meaning
// router.route("/").get(getProducts)  === router.get("/" , getProducts)
router.route("/").get(getProducts);
router
  .route("/:id")
  .get(getProductById)
  .delete(protect, adminMiddleware, deleteProduct);

export default router;
