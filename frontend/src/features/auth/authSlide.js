import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "./pathAPI";

const authSlide = createSlice({
  name: "authLogin",
  initialState: {
    loading: false,
    msg: "",
    user: "",
    token: "",
    refreshToken: "",
  },
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
      console.log(state.user);
      localStorage.removeItem("user");
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      window.localStorage.clear();
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
      state.loading = false;
      state.error = action.error;
    },
  },
});

export const { addToken, addRefreshToken, addUser, logoutUser } =
  authSlide.actions;
const { reducer } = authSlide;
export default reducer;
