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

export const getOrderDetail = createAsyncThunk("getOrderDetail", async (id) => {
  const token = localStorage.getItem("accessToken");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const { data } = await Axios.get(
    `http://localhost:8000/v1/order/${id}`,
    config
  );

  return data;
});

export const cancelOrder = createAsyncThunk("cancelOrder", async (id) => {
  const token = localStorage.getItem("accessToken");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const status = {
    status: "Đã hủy",
  };
  const { data } = await Axios.put(
    `http://localhost:8000/v1/order/${id}/cancel`,
    status,
    config
  );

  return data;
});

export const hideOrder = createAsyncThunk("cancelOrder", async (id) => {
  const token = localStorage.getItem("accessToken");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const isHide = {
    isHide: true,
  };
  const { data } = await Axios.put(
    `http://localhost:8000/v1/order/${id}/hide`,
    isHide,
    config
  );

  return data;
});
