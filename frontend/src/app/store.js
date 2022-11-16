import { configureStore } from "@reduxjs/toolkit";

import productModalReducer from "../features/productmodal/productModalSlice";
import listProductsSlice from "../features/product/listProductsSlice";
import productDetailsSlice from "../features/product/productDetailsSlice";
import cartItemsReducer from "../features/cart/cartSlice";

const rootReducer = {
  productModal: productModalReducer,
  productList: listProductsSlice,
  productDetails: productDetailsSlice,
  cartItems: cartItemsReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
