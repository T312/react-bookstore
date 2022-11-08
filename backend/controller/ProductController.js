import asyncHandler from "express-async-handler";
import Category from "../models/CategoryModel.js";
import Product from "../models/ProductModel.js";
import mongoose from "mongoose";
import cloudinary from "../utils/cloudinary.js";
import fs from "fs-extra";

// @route GET v1/products
// @desc Get all products
// @access Public
const getAllProducts = asyncHandler(async (req, res) => {
  const pageSize = 10;
  const page = Number(req.query.pageNumber) || 1;
  let filter = {};
  let sort = req.query.sort || "rating";

  if (req.query.categories) {
    filter = { category: req.query.categories.split(",") };
  }

  req.query.sort ? (sort = req.query.sort.split(",")) : (sort = [sort]);

  let sortBy = {};
  if (sort[1]) {
    sortBy[sort[0]] = sort[1];
  } else {
    sortBy[sort[0]] = "asc";
  }

  const search = req.query.search
    ? {
        name: {
          $regex: req.query.search,
          $options: "i",
        },
      }
    : {};
  const count = await Product.countDocuments({ ...search });
  const products = await Product.find({ ...search })
    .find(filter)
    .populate("category")
    .limit(pageSize)
    .skip(pageSize * (page - 1))
    .sort(sortBy);
  res.json({ products, page, pages: Math.ceil(count / pageSize) });
});

// @route get v1/products/featured
// @desc Get Featured Products
// @access public
const getFeaturedProducts = asyncHandler(async (req, res) => {
  const count = req.params.count ? req.params.count : 0;
  const products = await Product.find({ isFeatured: true }).limit(+count);
  if (products) {
    res.json({ products: products });
  } else {
    res.status(404);
    throw new Error("Product not Found");
  }
});

// @route get v1/products/count
// @desc get count products
// @access private/admin
const getProductCount = asyncHandler(async (req, res) => {
  const productCount = await Product.countDocuments();
  if (productCount) {
    res.json({ productCount: productCount });
  } else {
    res.status(404);
    throw new Error("Product not Found");
  }
});

// @route get v1/products/:id
// @desc get sigle product
// @access public
const getProductById = asyncHandler(async (req, res) => {
  if (!mongoose.isValidObjectId(req.params.id)) {
    res.status(400).json({ message: "Invalid product " });
  }
  const product = await Product.findById(req.params.id).populate("category");
  if (product) {
    res.json({
      product: product,
    });
  } else {
    res.status(404);
    throw new Error("Product not Found");
  }
});

const cloudinaryImageUploadMethod = async (file) => {
  const result = await cloudinary.v2.uploader.upload(file, {
    upload_preset: "mern-bookstore",
  });

  return { link: result.secure_url, image_id: result.public_id };
};

const cloudinaryImageDestroyMethod = async (id) => {
  const result = await cloudinary.v2.uploader.destroy(id);
  return result;
};
// @route POST v1/products
// @desc post product
// @access private
const createProduct = asyncHandler(async (req, res) => {
  const {
    name,
    price,
    description,
    countInStock,
    author,
    category,
    isFeatured,
    publisher,
  } = req.body;
  const urls = [];
  const files = req.files;
  for (const file of files) {
    const { path } = file;
    const newPath = await cloudinaryImageUploadMethod(path);
    urls.push(newPath);
  }
  const productExist = await Product.findOne({ name });
  if (productExist) {
    res.status(400);
    throw new Error("Product name already exist");
  }
  if (urls) {
    const product = new Product({
      name,
      price,
      description,
      descriptionImages: urls.map((url) => url),
      author,
      category,
      isFeatured,
      countInStock,
      publisher,
    });
    if (product) {
      const createdproduct = await product.save();
      for (const file of files) {
        const { path } = file;
        await fs.unlink(path);
      }
      res.status(201).json(createdproduct);
    } else {
      res.status(400);
      throw new Error("Invalid product data");
    }
  }
});

// @route put api/product
// @desc put product
// @access private
const updatedProduct = asyncHandler(async (req, res) => {
  const { name, price, removeImages, description, countInStock, isFeatured } =
    req.body;
  const product = await Product.findById(req.params.id);
  let urls = [];
  if (removeImages && !req.files) {
    for (let remove of removeImages) {
      const destroy = await cloudinaryImageDestroyMethod(remove);
    }
    urls = await Promise.all(
      await product.descriptionImages.filter((item) => {
        return !removeImages.includes(item.image_id);
      })
    );
  } else if (req.files && !removeImages) {
    const files = req.files;
    for (const file of files) {
      const { path } = file;
      const result = await cloudinaryImageUploadMethod(path);
      urls.push(result);
    }
    for (let i of product.descriptionImages) {
      urls.push(i);
    }
  } else {
    for (let remove of removeImages) {
      const destroy = await cloudinaryImageDestroyMethod(remove);
    }
    urls = await Promise.all(
      await product.descriptionImages.filter(
        (item) => !removeImages.includes(item.image_id)
      )
    );
    const files = req.files;
    for (const file of files) {
      const { path } = file;
      const result = await cloudinaryImageUploadMethod(path);
      urls.push(result);
    }
  }
  if (product) {
    product.name = name || product.name;
    product.price = price || product.price;
    product.description = description || product.description;
    product.descriptionImages = urls.map((url) => url);
    product.countInStock = countInStock || product.countInStock;
    product.isFeatured = isFeatured || product.isFeatured;
    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

// @route delete api/product/id
// @desc delete product
// @access private
const deleteProduct = asyncHandler(async (req, res) => {
  if (!mongoose.isValidObjectId(req.params.id)) {
    res.status(400).json({ message: "Invalid product" });
  }
  const product = await Product.findById(req.params.id);
  const urls = [];
  const files = product.descriptionImages;
  for (const file of files) {
    const destroy = await cloudinaryImageDestroyMethod(file.image_id);
    urls.push(destroy);
  }
  if (product && urls) {
    await product.remove();
    res.json({ message: "Product deleted" });
  } else {
    res.status(404);
    throw new Error("Product not Found");
  }
});

// @route Get v1/product/all
// @desc admin get all products
// @access private
const getAllProductsByAdmin = asyncHandler(async (req, res) => {
  const products = await Product.find().sort({ _id: 1 });
  res.json(products);
});

// @desc Get top rated products
// @route GET /v1/product/top
// @access Public
const getTopProduct = asyncHandler(async (req, res) => {
  const products = await Product.find({}).sort({ rating: -1 }).limit(3);
  res.json(products);
});

// @route POST v1/products/:id/review
// @desc post review product
// @access private
const createProductReview = asyncHandler(async (req, res) => {
  const { rating, comment } = req.body;
  const product = await Product.findById(req.params.id);

  if (product) {
    const alreadyReviewed = product.reviews.find(
      (r) => r.user.toString() === req.user._id.toString()
    );
    if (alreadyReviewed) {
      res.status(400);
      throw new Error("Product already Reviewed");
    }
    const review = {
      name: req.user.name,
      rating: Number(rating),
      comment,
      user: req.user._id,
    };

    product.reviews.push(review);
    product.numReviews = product.reviews.length;
    product.rating =
      product.reviews.reduce((acc, item) => item.rating + acc, 0) /
      product.reviews.length;

    await product.save();
    res.status(201).json({ message: "Reviewed Added" });
  } else {
    res.status(404);
    throw new Error("Product not Found");
  }
});

export {
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
};
