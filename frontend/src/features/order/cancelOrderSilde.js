import { createSlice } from "@reduxjs/toolkit";
import { cancelOrder } from "./pathAPI";

const cancelOrderSilde = createSlice({
  name: "cancelOrderSlise",
  initialState: {},
  reducers: {},
  extraReducers: {
    [cancelOrder.pending]: (state) => {
      state.loading = true;
    },
    [cancelOrder.fulfilled]: (state, action) => {
      state.loading = false;
      state.success = true;
      state.order = action.payload;
    },
    [cancelOrder.rejected]: (state) => {
      state.loading = false;
    },
  },
});

const { reducer, actions } = cancelOrderSilde;
export default reducer;
