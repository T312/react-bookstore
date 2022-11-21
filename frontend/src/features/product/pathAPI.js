import { createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";

export const getProductAll = createAsyncThunk("listProducts", async () => {
  const { data } = await Axios.get("http://localhost:8000/v1/product?limit=10");
  return data.products;
  // }
});

export const getProduct = createAsyncThunk("detailsProduct", async (id) => {
  const { data } = await Axios.get(`http://localhost:8000/v1/product/${id}`);
  // console.log("PRODUCTS DETAILS: ", data.product);
  return data.product;
});
