import { createSlice } from "@reduxjs/toolkit";
// import { addToCart } from "./pathAPI";

const items =
  localStorage.getItem("cartItems") !== null
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];

const initialState = {
  value: items,
};

export const cartItemsSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      //find Item
      const duplicate = state.value.filter((e) => e.name === newItem.name);
      //delete Item
      if (duplicate.length > 0) {
        state.value = state.value.filter((e) => e.name !== newItem.name);
        state.value = [
          ...state.value,
          {
            id: duplicate[0].id,
            name: newItem.name,
            _id: newItem._id,
            descriptionImages: newItem.descriptionImages,
            author: newItem.author,
            price: newItem.price,
            quantity: newItem.quantity + duplicate[0].quantity,
            qty: newItem.qty, //count element in cart
          },
        ];
      } else {
        state.value = [
          ...state.value,
          {
            ...action.payload,
            id:
              state.value.length > 0
                ? state.value[state.value.length - 1].id + 1
                : 1,
          },
        ];
      }
      localStorage.setItem(
        "cartItems",
        JSON.stringify(
          //sort Item
          state.value.sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0))
        )
      );
    },
    updateItem: (state, action) => {
      const newItem = action.payload;
      const item = state.value.filter((e) => e.name === newItem.name);
      if (item.length > 0) {
        state.value = state.value.filter((e) => e.name !== newItem.name);
        state.value = [
          ...state.value,
          {
            id: item[0].id,
            _id: newItem._id,
            name: newItem.name,
            descriptionImages: newItem.descriptionImages,
            author: newItem.author,
            price: newItem.price,
            quantity: newItem.quantity,
            qty: newItem.qty, //count element in cart
          },
        ];
      }
      localStorage.setItem(
        "cartItems",
        JSON.stringify(
          state.value.sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0))
        )
      );
    },
    removeItem: (state, action) => {
      const item = action.payload;
      state.value = state.value.filter((e) => e.name !== item.name);
      localStorage.setItem(
        "cartItems",
        JSON.stringify(
          state.value.sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0))
        )
      );
    },
  },
});
// Action creators are generated for each case reducer function
export const { addItem, removeItem, updateItem } = cartItemsSlice.actions;

export default cartItemsSlice.reducer;
