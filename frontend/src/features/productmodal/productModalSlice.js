import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  value: null,
};

const productModalSlice = createSlice({
  name: "productModal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      state.value = action.payload;
    },
    closeModal: (state, action) => {
      state.isOpen = false;
      state.value = null;
    },
  },
});

export const { openModal, closeModal } = productModalSlice.actions;

export default productModalSlice.reducer;
