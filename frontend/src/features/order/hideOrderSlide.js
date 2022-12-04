import { createSlice } from "@reduxjs/toolkit";
import { hideOrder } from "./pathAPI";

const hideOrderSilde = createSlice({
  name: "cancelOrderSlise",
  initialState: {},
  reducers: {},
  extraReducers: {
    [hideOrder.pending]: (state) => {
      state.loading = true;
    },
    [hideOrder.fulfilled]: (state, action) => {
      state.loading = false;
      state.success = true;
      state.order = action.payload;
    },
    [hideOrder.rejected]: (state) => {
      state.loading = false;
    },
  },
});

const { reducer, actions } = hideOrderSilde;
export default reducer;
