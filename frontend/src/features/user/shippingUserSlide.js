import { createSlice } from "@reduxjs/toolkit";
import { shippingUserCreate } from "./pathAPI";

const shippingUserSlide = createSlice({
  name: "shippingUser",
  initialState: {
    loading: true,
    user: {},
  },
  extraReducers: {
    [shippingUserCreate.pending]: (state) => {
      state.loading = true;
    },
    [shippingUserCreate.fulfilled]: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    [shippingUserCreate.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
  },
});

const { reducer } = shippingUserSlide;
export default reducer;
