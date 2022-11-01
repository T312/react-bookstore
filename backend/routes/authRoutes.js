import express from "express";
import {
  loginUser,
  registerUser,
  logoutUser,
  refreshAccessToken,
} from "../controller/AuthController.js";

const authRouter = express.Router();

authRouter.post("/login", loginUser);

authRouter.post("/register", registerUser);

authRouter.get("/logout", logoutUser);

authRouter.post("/refresh", refreshAccessToken);

export default authRouter;
