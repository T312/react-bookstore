import express from "express";
import {
  getAllProducts,
  getProductById,
  createProduct,
  updatedProduct,
  deleteProduct,
  getAllProductsByAdmin,
  getTopProduct,
  createProductReview,
  getFeaturedProducts,
  getProductCount,
} from "../controller/ProductController.js";
import { protect, admin } from "../Middleware/auth.js";
const productRoute = express.Router();

productRoute.get("/", getAllProducts).post("/", protect, admin, createProduct);

productRoute.get("/:id", getProductById);

productRoute
  .put("/:id", protect, admin, updatedProduct)
  .delete("/:id", protect, admin, deleteProduct);

productRoute.get("/all", protect, admin, getAllProductsByAdmin);

productRoute.get("/top", protect, admin, getTopProduct);

productRoute.post("/:id/review", protect, createProductReview);

export default productRoute;
