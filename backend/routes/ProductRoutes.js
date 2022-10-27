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
import multer from "multer";

const storage = multer.diskStorage({
  // notice you are calling the multer.diskStorage() method here, not multer()
  destination: function (req, file, cb) {
    cb(null, "img/");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now());
  },
});
const upload = multer({ storage });

const productRoute = express.Router();

productRoute
  .get("/", getAllProducts)
  .post("/", upload.single("image"), protect, admin, createProduct);

productRoute
  .put("/:id", upload.single("image"), protect, admin, updatedProduct)
  .delete("/:id", protect, admin, deleteProduct);

productRoute.get("/all", protect, admin, getAllProductsByAdmin);

productRoute.get("/top", protect, admin, getTopProduct);

productRoute.post("/:id/review", protect, createProductReview);

productRoute.get("/count", protect, admin, getProductCount);

productRoute.get("/featured/:count", protect, admin, getFeaturedProducts);

productRoute.get("/:id", getProductById);

export default productRoute;
