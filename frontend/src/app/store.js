import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import thunk from "redux-thunk";
import productModalReducer from "../features/productmodal/productModalSlice";
import listProductsSlice from "../features/product/listProductsSlice";
import productDetailsSlice from "../features/product/productDetailsSlice";
import cartItemsReducer from "../features/cart/cartSlice";
import authSlide from "../features/auth/authSlide";
import listCategorySlice from "../features/category/listCategorySlide";

const rootReducer = {
  productModal: productModalReducer,
  productList: listProductsSlice,
  productDetails: productDetailsSlice,
  cartItems: cartItemsReducer,
  authUser: authSlide,
  categoryList: listCategorySlice,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk, logger],
});

export default store;
