import { createSlice } from "@reduxjs/toolkit";
import { getListCategory } from "./pathAPI";

const listProductsSlice = createSlice({
  name: "listCategory",
  initialState: {
    loading: true,
    category: [],
  },
  extraReducers: {
    [getListCategory.pending]: (state) => {
      state.loading = true;
    },
    [getListCategory.fulfilled]: (state, action) => {
      state.loading = false;
      state.category = action.payload;
    },
    [getListCategory.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
  },
});

const { reducer } = listProductsSlice;
export default reducer;
