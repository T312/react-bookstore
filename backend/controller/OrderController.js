import Order from "../models/OrderModel.js";
import asyncHandler from "express-async-handler";

// @route POST v1/order
// @desc create order
// @access private
const addOrderItems = asyncHandler(async (req, res) => {
  const {
    orderDetails,
    shippingAddress,
    paymentMethod,
    shippingPrice,
    itemsPrice,
    totalPrice,
  } = req.body;
  if (orderDetails && orderDetails.length === 0) {
    res.status(400);
    throw new Error("No order items");
    return;
  } else {
    const order = new Order({
      orderDetails,
      user: req.user._id,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      shippingPrice,
      totalPrice,
    });
    const createOrder = await order.save();
    res.status(201).json(createOrder);
  }
});

// @route get v1/order/all
// @desc admin get all order
// @access private
const getAllOrderByAdmin = asyncHandler(async (req, res) => {
  const orders = await Order.find({})
    .sort({ _id: -1 })
    .populate("user", "id name email");
  res.json(orders);
});

// @route get v1/order/
// @desc user get all order
// @access private
const getUserOrder = asyncHandler(async (req, res) => {
  const orders = await Order.find({ user: req.user.id });
  res.json(orders);
});

// @route get v1/order/:id
// @desc get order by id
// @access private
const getOrderById = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate(
    "user",
    "name email"
  );
  if (order) {
    res.json(order);
  } else {
    res.status(404);
    throw new Error("Order Not Found");
  }
});

// @route update v1/order/:id/pay
// @desc update pay
// @access private
const updateOrderToPaid = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (order) {
    order.isPaid = true;
    order.paidAt = Date.now();
    order.paymentResult = {
      id: req.body.id,
      status: req.body.status,
      update_time: req.body.update_time,
      email_address: req.body.email_address,
    };

    const updatedOrder = await order.save();
    res.json(updatedOrder);
  } else {
    res.status(404);
    throw new Error("Order Not Found");
  }
});

// @route update v1/order/:id/delivered
// @desc update is delivered
// @access private
const updateOrderToDelivered = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (order) {
    order.isDelivered = true;
    order.deliveredAt = Date.now();

    const updatedOrder = await order.save();
    res.json(updatedOrder);
  } else {
    res.status(404);
    throw new Error("Order Not Found");
  }
});

export {
  addOrderItems,
  getAllOrderByAdmin,
  getUserOrder,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
};
