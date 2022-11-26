import { createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";

export const createOrder = createAsyncThunk(
  "createOrder",
  async (order, { getState }) => {
    const token = localStorage.getItem("accessToken");
    // console.log("Create Order: ", order);
    const { data } = await Axios.post("http://localhost:8000/v1/order", order, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return data.order;
  },
);
