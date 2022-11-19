import Axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const loginUser = createAsyncThunk(
  "loginUser",
  async ({ email, password }) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      // withCredentials: true,
    };
    const data = await Axios.post(
      "http://localhost:8000/v1/auth/login",
      {
        email,
        password,
      },
      config
    );
    return data;
  }
);
