import Order from "../models/OrderModel.js";
import asyncHandler from "express-async-handler";
import OrderItem from "../models/OrderItemModel.js";

// @route POST v1/order
// @desc create order
// @access private
const addOrderItems = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    shippingPrice,
    itemsPrice,
    isPaid,
  } = req.body;
  const orderItemIds = Promise.all(
    orderItems.map(async (orderItem) => {
      let newOrderItem = new OrderItem({
        quantity: orderItem.quantity,
        product: orderItem.product,
      });
      newOrderItem = await newOrderItem.save();
      return newOrderItem._id;
    })
  );
  const orderItemIdsResolved = await orderItemIds;
  const totalPriceResults = await Promise.all(
    orderItemIdsResolved.map(async (orderItem) => {
      const item = await OrderItem.findById(orderItem).populate(
        "product",
        "price"
      );
      const totalPrice = item.product.price * item.quantity;
      return totalPrice;
    })
  );
  const total = totalPriceResults.reduce((a, b) => a + b, 0);

  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error("No order items");
  } else {
    const order = new Order({
      orderItems: orderItemIdsResolved,
      user: req.user._id,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      shippingPrice,
      totalPrice: total,
      isPaid,
    });
    const createOrder = await order.save();
    res.status(201).json(createOrder);
  }
});
// @route get v1/order/count
// @desc get count order
// @access private
const getOrderCount = asyncHandler(async (req, res) => {
  const orderCount = await Order.countDocuments();
  if (orderCount) {
    res.json({ orderCount: orderCount });
  } else {
    res.status(404);
    throw new Error("Order not Found");
  }
});
// @route get v1/order/all
// @desc admin get all order
// @access private/admin
const getAllOrderByAdmin = asyncHandler(async (req, res) => {
  const orders = await Order.find({})

    .populate("user", "id name email")
    .populate({
      path: "orderItems",
      populate: { path: "product", populate: "category" },
    });
  res.json(orders);
});

// @route get v1/order/myorders
// @desc user get all order
// @access private
const getUserOrder = asyncHandler(async (req, res) => {
  const orders = await Order.find({ user: req.user.id }).populate({
    path: "orderItems",
    populate: { path: "product", populate: "category" },
  });
  res.json(orders);
});

// @route get v1/order/:id
// @desc get order by id
// @access private
const getOrderById = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id)
    .populate("user", "name email")
    .populate({
      path: "orderItems",
      populate: { path: "product", populate: "category" },
    });
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
  try {
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
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
});

// @route DELETE v1/order/:id
// @desc DELETE order
// @access private/admin
const deleteOrder = asyncHandler(async (req, res) => {
  try {
    await Order.findByIdAndRemove(req.params.id).then(async (order) => {
      if (order) {
        await order.orderItems.map(async (item) => {
          await OrderItem.findByIdAndRemove(item);
        });

        res.status(200).json({ success: true, message: "Order deleted" });
      } else {
        res.status(404);
        throw new Error("Order not Found");
      }
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error });
  }
});

// @route get v1/order/sale
// @desc total sales order
// @access private
const totalSales = asyncHandler(async (req, res) => {
  // const totalSales = await Order.aggregate([
  //   {
  //     $group: { _id: null, totalSales: { $sum: "$totalPrice" } },
  //   },
  // ]);
  // if (!totalSales) {
  //   return res.status(404).json({
  //     success: false,
  //     message: "The order sales is can not be generated ",
  //   });
  // } else {
  //   return res
  //     .status(200)
  //     .json({ success: true, totalSales: totalSales.pop().totalSales });
  // }
});
export {
  addOrderItems,
  getAllOrderByAdmin,
  getUserOrder,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  deleteOrder,
  getOrderCount,
  totalSales,
};
