import { createSlice } from "@reduxjs/toolkit";
import { orderListOfUser } from "./pathAPI";

const orderUserList = createSlice({
  name: "orderUserList",
  initialState: {},
  reducers: {},
  extraReducers: {
    [orderListOfUser.pending]: (state) => {
      state.loading = true;
    },
    [orderListOfUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.success = true;
      state.order = action.payload;
    },
    [orderListOfUser.rejected]: (state) => {
      state.loading = false;
    },
  },
});

const { reducer, actions } = orderUserList;
export default reducer;
