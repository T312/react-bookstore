import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const productModalSlice = createSlice({
  name: "productModal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
    },
    closeModal: (state, action) => {
      state.isOpen = false;
    },
  },
});

export const { openModal, closeModal } = productModalSlice.actions;

export default productModalSlice.reducer;
