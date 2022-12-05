import Axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const loginUser = createAsyncThunk(
  "loginUser",
  async ({ email, password }) => {
    try {
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
    } catch (error) {
      toast.error("Email hay mật khẩu không hợp lệ");
    }
  }
);
export const registerUser = createAsyncThunk(
  "registerUser",
  async ({ name, email, password }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
        // withCredentials: true,
      };
      const data = await Axios.post(
        "http://localhost:8000/v1/auth/register",
        {
          email,
          password,
          name,
        },
        config
      );
      return data;
    } catch (error) {
      toast.error("Email đã tồn tại! xin hãy đăng nhập lại");
    }
  }
);

export const registerGoogleUser = createAsyncThunk(
  "registerGoogleUser",
  async (tokenid) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const token = {
        token: tokenid,
      };
      const data = await Axios.post(
        "http://localhost:8000/v1/auth/registerGoogle",
        token,
        config
      );
      return data;
    } catch (error) {
      toast.error("Email đã tồn tại! xin hãy đăng nhập lại");
    }
  }
);

export const loginGoogleUser = createAsyncThunk(
  "loginGoogleUser",
  async (tokenid) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const token = {
        token: tokenid,
      };
      const data = await Axios.post(
        "http://localhost:8000/v1/auth/loginGoogle",
        token,
        config
      );
      return data;
    } catch (error) {
      toast.error("Server bị lỗi!! Xin hãy tảt lại trang");
    }
  }
);
