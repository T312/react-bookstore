import { createSlice } from "@reduxjs/toolkit";
import { getOrderDetail } from "./pathAPI";

const orderDetailSlice = createSlice({
  name: "orderDetailSlice",
  initialState: {},
  reducers: {},
  extraReducers: {
    [getOrderDetail.pending]: (state) => {
      state.loading = true;
    },
    [getOrderDetail.fulfilled]: (state, action) => {
      state.loading = false;
      state.success = true;
      state.order = action.payload;
    },
    [getOrderDetail.rejected]: (state) => {
      state.loading = false;
      state.error = "Không tìm thấy đơn hàng của bạn";
    },
  },
});

const { reducer, actions } = orderDetailSlice;
export default reducer;
