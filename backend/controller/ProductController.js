import asyncHandler from "express-async-handler";
import Product from "../models/ProductModel.js";

// @route GET v1/products
// @desc Get all products
// @access Public
const getAllProducts = asyncHandler(async (req, res) => {
  const pageSize = 12;
  const page = Number(req.query.pageNumber) || 1;
  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: "i",
        },
      }
    : {};
  const count = await Product.countDocuments({ ...keyword });
  const products = await Product.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1))
    .sort({ _id: -1 });
  res.json({ products, page, pages: Math.ceil(count / pageSize) });
});

// @route get v1/products/:id
// @desc get sigle product
// @access public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product not Found");
  }
});

// @route POST v1/products
// @desc post product
// @access private
const createProduct = asyncHandler(async (req, res) => {
  const { name, price, description, image, countInStock, author, category } =
    req.body;
  const productExist = await Product.findOne({ name });
  if (productExist) {
    res.status(400);
    throw new Error("Product name already exist");
  } else {
    const product = new Product({
      name,
      price,
      description,
      image,
      author,
      category,
      countInStock,
    });
    if (product) {
      const createdproduct = await product.save();
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
  const { name, price, description, image, countInStock } = req.body;
  const product = await Product.findById(req.params.id);
  if (product) {
    product.name = name || product.name;
    product.price = price || product.price;
    product.description = description || product.description;
    product.image = image || product.image;
    product.countInStock = countInStock || product.countInStock;

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
  const product = await Product.findById(req.params.id);
  if (product) {
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
};
