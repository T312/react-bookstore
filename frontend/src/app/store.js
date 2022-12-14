import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import thunk from "redux-thunk";
import productModalReducer from "../features/productmodal/productModalSlice";
import listProductsSlice from "../features/product/listProductsSlice";
import productDetailsSlice from "../features/product/productDetailsSlice";
import productReviewSlice from "../features/product/productReviewSlice";
import shippingUserSlide from "../features/user/shippingUserSlide";

import cartItemsReducer from "../features/cart/cartSlice";
import authSlide from "../features/auth/authSlide";
import listCategorySlice from "../features/category/listCategorySlide";
import userDetailsSlice from "../features/user/userSlide";
import getUserSlide from "../features/user/getUserSlide";

import orderCreateSlice from "../features/order/orderCreateSlice";
import orderDetailSlice from "../features/order/orderDetailSlice";
import listUserOrderSlide from "../features/order/listUserOrderSlide";
import cancelOrderSilde from "../features/order/cancelOrderSilde";
import hideOrderSlide from "../features/order/hideOrderSlide";

const rootReducer = {
  productModal: productModalReducer,
  productList: listProductsSlice,
  productDetails: productDetailsSlice,
  cartItems: cartItemsReducer,
  authUser: authSlide,
  categoryList: listCategorySlice,
  userDetails: userDetailsSlice,
  orderCreate: orderCreateSlice,
  orderDetail: orderDetailSlice,
  listUserOrder: listUserOrderSlide,
  reviewProduct: productReviewSlice,
  createShippingAddress: shippingUserSlide,
  getUserProfile: getUserSlide,
  cancelOrderUser: cancelOrderSilde,
  hideOrderUser: hideOrderSlide,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk, logger],
});

export default store;
