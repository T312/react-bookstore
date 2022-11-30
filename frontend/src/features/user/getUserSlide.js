import { createSlice } from "@reduxjs/toolkit";
import { getUser } from "./pathAPI";

const getUserSlice = createSlice({
  name: "getUser",
  initialState: {
    loading: true,
    user: [],
  },
  extraReducers: {
    [getUser.pending]: (state) => {
      state.loading = true;
    },
    [getUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    [getUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
  },
});

const { reducer } = getUserSlice;
export default reducer;
