import { createSlice } from "@reduxjs/toolkit";
import {
  loginUser,
  registerUser,
  registerGoogleUser,
  loginGoogleUser,
} from "./pathAPI";
import { toast } from "react-toastify";
const items =
  localStorage.getItem("user") !== null
    ? {
        loading: false,
        msg: "",
        user: JSON.parse(localStorage.getItem("user")),
        token: localStorage.getItem("accessToken"),
        refreshToken: localStorage.getItem("refreshToken"),
      }
    : {
        loading: false,
        msg: "",
        user: "",
        token: "",
        refreshToken: "",
      };

const authSlide = createSlice({
  name: "authLogin",
  initialState: items,
  reducers: {
    addToken: (state, action) => {
      state.token = localStorage.getItem("accessToken");
    },
    addRefreshToken: (state, action) => {
      state.refreshToken = localStorage.getItem("refreshToken");
    },
    addUser: (state, action) => {
      state.user = localStorage.getItem("user");
    },
    logoutUser: (state, action) => {
      state.user = null;
      localStorage.removeItem("user");
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      // window.localStorage.clear();
    },
  },
  extraReducers: {
    [loginUser.pending]: (state) => {
      state.loading = true;
    },
    [loginUser.fulfilled]: (state, action) => {
      state.loading = false;
      if (action.payload.error) {
        state.error = action.payload.error;
      } else {
        toast("Đăng nhập thành công!");
        state.msg = action.payload.data.message;
        state.token = action.payload.data.accessToken;
        state.user = action.payload.data.user;
        state.refreshToken = action.payload.data.refreshToken;

        localStorage.setItem("user", JSON.stringify(action.payload.data.user));
        localStorage.setItem("accessToken", action.payload.data.accessToken);
        localStorage.setItem("refreshToken", action.payload.data.refreshToken);
      }
    },
    [loginUser.rejected]: (state, action) => {
      toast.error("Nhập sai Email hoặc mật khẩu!");
      state.loading = false;
      state.error = action.error;
    },
    // ********************************************************** register user ************************************
    [registerUser.pending]: (state) => {
      state.loading = true;
    },
    [registerUser.fulfilled]: (state, action) => {
      state.loading = false;
      if (action.payload.error) {
        state.error = action.payload.error;
      } else {
        state.msg = action.payload.data.message;
        state.token = action.payload.data.accessToken;
        state.user = action.payload.data.user;
        state.refreshToken = action.payload.data.refreshToken;

        localStorage.setItem("user", JSON.stringify(action.payload.data.user));
        localStorage.setItem("accessToken", action.payload.data.accessToken);
        localStorage.setItem("refreshToken", action.payload.data.refreshToken);
      }
    },
    [registerUser.rejected]: (state, action) => {
      state.loading = false;
      toast.error("Nhập sai Email hoặc mật khẩu!");
      state.error = action.error;
    },

    // ********************************************************** register user ************************************
    [registerGoogleUser.pending]: (state) => {
      state.loading = true;
    },
    [registerGoogleUser.fulfilled]: (state, action) => {
      state.loading = false;
      if (action.payload.error) {
        state.error = action.payload.error;
        toast.error(action.payload.error);
      } else {
        toast.error(action.payload.data.message);
        state.msg = action.payload.data.message;
        state.token = action.payload.data.accessToken;
        state.user = action.payload.data.user;
        state.refreshToken = action.payload.data.refreshToken;

        localStorage.setItem("user", JSON.stringify(action.payload.data.user));
        localStorage.setItem("accessToken", action.payload.data.accessToken);
        localStorage.setItem("refreshToken", action.payload.data.refreshToken);
      }
    },
    [registerGoogleUser.rejected]: (state, action) => {
      state.loading = false;

      state.error = action.error;
    },
    // ********************************************************** register user ************************************
    [loginGoogleUser.pending]: (state) => {
      state.loading = true;
    },
    [loginGoogleUser.fulfilled]: (state, action) => {
      state.loading = false;
      if (action.payload.error) {
        state.error = action.payload.error;
      } else {
        state.msg = action.payload.data.message;
        state.token = action.payload.data.accessToken;
        state.user = action.payload.data.user;
        state.refreshToken = action.payload.data.refreshToken;

        localStorage.setItem("user", JSON.stringify(action.payload.data.user));
        localStorage.setItem("accessToken", action.payload.data.accessToken);
        localStorage.setItem("refreshToken", action.payload.data.refreshToken);
      }
    },
    [loginGoogleUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
  },
});

export const { addToken, addRefreshToken, addUser, logoutUser } =
  authSlide.actions;
const { reducer } = authSlide;
export default reducer;
