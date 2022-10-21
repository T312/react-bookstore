import express from "express";
import { protect, admin } from "../Middleware/auth.js";
import {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
  getUserByAdmin,
} from "../controller/UserController.js";

const userRouter = express.Router();

userRouter.post("/login", authUser);

userRouter.post("/register", registerUser);

userRouter.get("/profile", protect, getUserProfile);

userRouter.put("/profile", protect, updateUserProfile);

userRouter.get("/", protect, admin, getUserByAdmin);

export default userRouter;
