import { createSlice } from "@reduxjs/toolkit";
import { updateProfile } from "./pathAPI";

const userDetailsSlice = createSlice({
  name: "userDetails",
  initialState: {
    loading: true,
    user: [],
  },
  extraReducers: {
    [updateProfile.pending]: (state) => {
      state.loading = true;
    },
    [updateProfile.fulfilled]: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    [updateProfile.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
  },
});

const { reducer } = userDetailsSlice;
export default reducer;
