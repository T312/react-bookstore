import asyncHandler from "express-async-handler";
import User from "../models/UserModel.js";

//@route  v1/auth/profile
//@desc get user profile
//@access private
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    res.json({
      success: true,
      message: "get profile success",
      user: user,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

//@route  v1/auth/profile
//@desc update user profile
//@access private
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    if (req.body.password) {
      user.password = req.body.password;
    }
    const updatedUser = await user.save();
    res.json({
      success: true,
      message: "Update profile success",
      user: updatedUser,
      // token: generateToken(updatedUser._id),
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

//@route  v1/auth/users
//@desc   get all users by admin
//@access private/admin
const getUserByAdmin = asyncHandler(async (req, res) => {
  const limit = Number(req.query.limit);
  const search = req.query.search
    ? {
        name: {
          $regex: req.query.search,
          $options: "i",
        },
      }
    : {};
  const count = await User.countDocuments({ ...search });
  const users = await User.find({ ...search }).limit(limit);
  res.json({
    success: true,
    message: "Success loading",
    users: users,
  });
});

// @desc    Delete user
// @route   v1/auth/users/:id
// @access  Private/Admin
const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    await user.remove();
    res.json({ success: true, message: "User removed" });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

// @desc    Get user by ID
// @route   GET /v1/auth/users/:id
// @access  Private/Admin
const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id).select("-password");

  if (user) {
    res.json({
      success: true,
      message: "loading success",
      user: user,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

// @desc    Update user
// @route   /v1/auth/users/:id
// @access  Private/Admin
const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.isAdmin = req.body.isAdmin;

    const updatedUser = await user.save();

    res.json({
      success: true,
      message: "User update success",
      user: updatedUser,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});
export {
  getUserProfile,
  updateUserProfile,
  getUserByAdmin,
  deleteUser,
  getUserById,
  updateUser,
};
