import express from "express";
import { protect, admin } from "../Middleware/auth.js";
import {
  addOrderItems,
  getAllOrderByAdmin,
  getUserOrder,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  deleteOrder,
  getOrderCount,
  totalSales,
} from "../controller/OrderController.js";
const orderRoute = express.Router();

orderRoute.post("/", protect, addOrderItems);

orderRoute.get("/count", protect, getOrderCount);

orderRoute.get("/all", protect, admin, getAllOrderByAdmin);

orderRoute.get("/myorders", protect, getUserOrder);

orderRoute.get("/:id", protect, getOrderById);

orderRoute.put("/:id/pay", protect, updateOrderToPaid);

orderRoute.put("/:id/delivered", protect, updateOrderToDelivered);

orderRoute.delete("/:id", protect, admin, deleteOrder);

orderRoute.get("/sale", protect, totalSales);

export default orderRoute;
