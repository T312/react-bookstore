import Category from "../models/CategoryModel.js";
import asyncHandler from "express-async-handler";

// @route get v1/category
// @desc get all categories
// @access private/admin routes
const getCategoryList = asyncHandler(async (req, res) => {
  const category = await Category.find();
  if (!category) {
    res.status(404).json({ success: false, message: "Category not found" });
  } else {
    res.status(200).json({ category: category });
  }
});

// @route get v1/category/:id
// @desc get categories by id
// @access private/admin
const getCategoryById = asyncHandler(async (req, res) => {
  const category = await Category.findById(req.params.id);
  if (!category) {
    res.status(404).json({
      success: false,
      message: "Category with the given id was not found",
    });
  } else {
    res.status(200).json({ category: category });
  }
});

// @route get v1/category/
// @desc create categories
// @access private/admin
const createCategory = asyncHandler(async (req, res) => {
  const { name } = req.body;
  const categoryExist = await Category.findOne({ name });
  if (categoryExist) {
    res.status(400);
    throw new Error("Category name already exist");
  } else {
    const category = new Category({
      name,
    });
    if (category) {
      const createdCategory = await category.save();
      res.status(201).json(createdCategory);
    } else {
      res.status(400);
      throw new Error("Invalid category data");
    }
  }
});

// @route PUT v1/category/:id
// @desc put categories
// @access private/admin
const updateCategory = asyncHandler(async (req, res) => {
  const { name } = req.body;
  const category = await Category.findById(req.params.id);
  if (category) {
    category.name = name || category.name;
    const updatedCategory = await category.save();
    res.status(201);
    res.json({ updatedCategory: updatedCategory });
  } else {
    res.status(404);
    throw new Error("Category not found");
  }
});

// @route DELETE v1/category/:id
// @desc DELETE categories
// @access private/admin
const deleteCategory = asyncHandler(async (req, res) => {
  const category = await Category.findById(req.params.id);
  if (category) {
    await category.remove();
    res.json({ message: "Category deleted" });
  } else {
    res.status(404);
    throw new Error("Category not Found");
  }
});
export {
  getCategoryList,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};
