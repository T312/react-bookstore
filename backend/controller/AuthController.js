import asyncHandler from "express-async-handler";
import User from "../models/UserModel.js";
import { accessToken, refreshToken } from "../utils/generateToken.js";
import argon2 from "argon2";
import jwt from "jsonwebtoken";
import { OAuth2Client } from "google-auth-library";
import dotenv from "dotenv";
// const { OAuth2Client } = require("google-auth-library");

//@route  v1/auth/loginGoogle
//@desc login the user
//@access public
dotenv.config();
const client = new OAuth2Client(process.env.REACT_APP_GOOGLE_CLIENT_ID);
const loginGoogleUser = asyncHandler(async (req, res) => {
  const { token } = req.body;
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: process.env.CLIENT_ID,
  });
  const { email } = ticket.getPayload();
  const user = await User.findOne({ email });
  // const passwordValid = await argon2.verify(user.password, "GiaLong");
  if (user) {
    res.json({
      success: true,
      message: "Login success",
      accessToken: accessToken(user._id),
      refreshToken: refreshToken(user._id),
      user: user,
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
});

const singupGoogleUser = asyncHandler(async (req, res) => {
  const { token } = req.body;
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: process.env.CLIENT_ID,
  });
  const { name, email } = ticket.getPayload();
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }
  const hashedPassword = await argon2.hash("GiaLong");
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      success: true,
      message: "register profile success",
      accessToken: accessToken(user._id),
      refreshToken: refreshToken(user._id),
      user: user,
    });
  } else {
    res.status(400);
    throw new Error("Invalid User Data");
  }
});

//@route  v1/auth/login
//@desc login the user
//@access public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  const passwordValid = await argon2.verify(user.password, password);
  if (user && passwordValid) {
    // res.cookie("refreshToken", refreshToken(user._id), {
    //   httpOnly: true, //accessible only by web server
    //   maxAge: 7 * 24 * 60 * 60 * 1000, //cookie expiry: set to match rT
    // });
    res.json({
      success: true,
      message: "Login success",
      accessToken: accessToken(user._id),
      refreshToken: refreshToken(user._id),
      user: user,
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
});

//@route  v1/auth/register
//@desc check if user is register
//@access public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }
  const hashedPassword = await argon2.hash(password);
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  if (user) {
    // res.cookie("refreshToken", refreshToken(user._id), {
    //   httpOnly: true, //accessible only by web server
    //   maxAge: 7 * 24 * 60 * 60 * 1000, //cookie expiry: set to match rT
    // });
    res.status(201).json({
      success: true,
      message: "register profile success",
      accessToken: accessToken(user._id),
      refreshToken: refreshToken(user._id),
      user: user,
    });
  } else {
    res.status(400);
    throw new Error("Invalid User Data");
  }
});

const refreshAccessToken = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const cookies = req.cookies;
  console.log();
  if (!cookies) return res.status(401).json({ message: "Cookies not found" });

  const refreshToken = cookies["refreshToken"];
  console.log(refreshToken);
  jwt.verify(
    refreshToken,
    process.env.REFRESH_TOKEN_SECRET,
    asyncHandler(async (err, decoded) => {
      if (err) return res.status(403).json({ message: err.message });

      const user = await User.findOne({ email });

      if (!user) return res.status(401).json({ message: "Unauthorized" });
      res.cookie("refreshToken", refreshToken(user._id), {
        httpOnly: true, //accessible only by web server
        maxAge: 7 * 24 * 60 * 60 * 1000, //cookie expiry: set to match rT
      });
      res.status(201).json({
        success: true,
        message: " profile success",
        accessToken: accessToken(user._id),
        user: user,
      });
    })
  );
});

// @desc Logout
// @route POST /v1/auth/logout
// @access Public - just to clear cookie if exists
const logoutUser = asyncHandler(async (req, res) => {
  const cookies = req.cookies;
  if (!cookies) return res.sendStatus(204); //No content
  res.clearCookie("refreshToken", {
    httpOnly: true,
    sameSite: "None",
    secure: true,
  });
  res.json({ message: "Cookie cleared" });
});

export {
  loginUser,
  registerUser,
  refreshAccessToken,
  logoutUser,
  singupGoogleUser,
  loginGoogleUser,
};
