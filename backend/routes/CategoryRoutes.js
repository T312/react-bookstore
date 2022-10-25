import express from "express";
import {
  getCategoryList,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../controller/CategoryController.js";
import { protect, admin } from "../Middleware/auth.js";
const categoryRoute = express.Router();

categoryRoute
  .get("/", protect, admin, getCategoryList)
  .post("/", protect, admin, createCategory);
categoryRoute.get("/:id", protect, admin, getCategoryById);
categoryRoute.put("/:id", updateCategory);
categoryRoute.delete("/:id", deleteCategory);

export default categoryRoute;
