import express from "express";
import { protect, admin } from "../Middleware/auth.js";
import {
  getUserProfile,
  updateUserProfile,
  getUserByAdmin,
  deleteUser,
  getUserById,
  updateUser,
  createShippingAddress,
  createUser,
} from "../controller/UserController.js";

const userRouter = express.Router();

userRouter
  .get("/profile", protect, getUserProfile)
  .put("/profile", protect, updateUserProfile)
  .post("/profile", protect, createShippingAddress);
userRouter
  .get("/", protect, admin, getUserByAdmin)
  .post("/", protect, admin, createUser)
  .delete("/users", protect, admin, deleteUser)
  .get("/users", protect, admin, getUserById)
  .put("/users", protect, admin, updateUser);

export default userRouter;
