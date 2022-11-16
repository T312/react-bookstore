import Axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProduct } from "../product/pathAPI";

export const addToCart = createAsyncThunk(
  "addToCart",
  async ({ productId, qty }) => {
    const { data } = await Axios.get(`/v1/product/${productId}`);
    console.log("productId: ", data);
    return {
      name: data.name,
      descriptionImages: data.descriptionImages[0].link,
      price: data.price,
      // countInStock: data.countInStock,
      product: data.id,
      qty,
    };
  },
);

export const getCartItemsInfo = (cartItems) => {
  let res = [];
  if (cartItems.length > 0) {
    cartItems.forEach((e) => {
      let product = getProduct(e.id);
      res.push({
        ...e,
        product: product,
      });
    });
  }
  // console.log(res)
  // console.log('sorted')
  // console.log(res.sort((a, b) => a.slug > b.slug ? 1 : (a.slug < b.slug ? -1 : 0)))
  return res.sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0));
};
