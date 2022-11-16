import { configureStore } from "@reduxjs/toolkit";

import productModalReducer from "../features/productmodal/productModalSlice";
import listProductsSlice from "../features/product/listProductsSlice";
import productDetailsSlice from "../features/product/productDetailsSlice";

const rootReducer = {
  productModal: productModalReducer,
  productList: listProductsSlice,
  productDetails: productDetailsSlice,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
