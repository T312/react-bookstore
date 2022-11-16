import Axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

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
