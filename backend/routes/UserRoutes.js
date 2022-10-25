import express from "express";
import { protect, admin } from "../Middleware/auth.js";
import {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
  getUserByAdmin,
  deleteUser,
  getUserById,
  updateUser,
} from "../controller/UserController.js";

const userRouter = express.Router();

userRouter.post("/login", authUser);

userRouter.post("/register", registerUser);

userRouter
  .get("/profile", protect, getUserProfile)
  .put("/profile", protect, updateUserProfile);

userRouter
  .get("/users", protect, admin, getUserByAdmin)
  .delete("/users", protect, admin, deleteUser)
  .get("/users", protect, admin, getUserById)
  .put("/users", protect, admin, updateUser);

export default userRouter;
