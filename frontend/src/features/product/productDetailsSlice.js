import { createSlice } from "@reduxjs/toolkit";
import { getProduct } from "./pathAPI";

const productDetailsSlice = createSlice({
  name: "detailsProduct",
  initialState: {
    product: {},
    loading: true,
  },
  extraReducers: {
    [getProduct.pending]: (state) => {
      state.loading = true;
    },
    [getProduct.fulfilled]: (state, action) => {
      state.loading = false;
      state.product = action.payload;
    },
    [getProduct.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
  },
});

const { reducer } = productDetailsSlice;

export default reducer;
