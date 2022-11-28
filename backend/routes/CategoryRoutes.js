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
  .get("/", getCategoryList)
  .post("/", protect, admin, createCategory);
categoryRoute.get("/:id", getCategoryById);
categoryRoute.put("/:id", protect, admin, updateCategory);
categoryRoute.delete("/:id", protect, admin, deleteCategory);

export default categoryRoute;
