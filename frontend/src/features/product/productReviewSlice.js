import { createSlice } from "@reduxjs/toolkit";
import { reviewProduct } from "./pathAPI";

const productReviewSlice = createSlice({
  name: "reviewProduct",
  initialState: {
    product: {},
    loading: true,
  },
  extraReducers: {
    [reviewProduct.pending]: (state) => {
      state.loading = true;
    },
    [reviewProduct.fulfilled]: (state, action) => {
      state.loading = false;
      state.product = action.payload;
    },
    [reviewProduct.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
  },
});

const { reducer } = productReviewSlice;

export default reducer;
