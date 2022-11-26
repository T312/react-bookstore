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
import upload from "../utils/multer.js";

const productRoute = express.Router();

// productRoute
//   .get("/", getAllProducts)
//   .post("/", upload.single("image"), protect, admin, createProduct);

productRoute.get("/", getAllProducts).post(
  "/",
  // upload.single("image"),
  upload.array("descriptionImages", 10),
  protect,
  admin,
  createProduct,
);

productRoute
  .put(
    "/:id",
    upload.array("descriptionImages", 10),
    protect,
    admin,
    updatedProduct,
  )
  // .put("/:id", upload.single("image"), protect, admin, updatedProduct)
  .delete("/:id", protect, admin, deleteProduct);

productRoute.get("/all", protect, admin, getAllProductsByAdmin);

productRoute.get("/top", protect, admin, getTopProduct);

productRoute.post("/:id/review", protect, createProductReview);

productRoute.get("/count", protect, admin, getProductCount);

productRoute.get("/featured/:count", protect, admin, getFeaturedProducts);

productRoute.get("/:id", getProductById);

export default productRoute;
