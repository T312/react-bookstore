import { createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";

export const createOrder = createAsyncThunk("createOrder", async (order) => {
  const token = localStorage.getItem("accessToken");
  // console.log("Create Order: ", order);
  const { data } = await Axios.post("http://localhost:8000/v1/order", order, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data.order;
});

export const orderListOfUser = createAsyncThunk("orderListOfUser", async () => {
  const token = localStorage.getItem("accessToken");
  // console.log("Create Order: ", order);
  const { data } = await Axios.get("http://localhost:8000/v1/order/myorders", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
});

export const detailsOrder = createAsyncThunk(
  "detailsOrder",
  async (orderId) => {
    const token = localStorage.getItem("accessToken");
    const { data } = await Axios.get(
      `http://localhost:8000/v1/order/${orderId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    console.log("Data order:", data);
    return data;
  },
);
