import {
  USER_LIST_FAIL,
  USER_LIST_REQUEST,
  USER_LIST_RESET,
  USER_LIST_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
} from "../Constants/UserContants";
import axios from "axios";
import { toast } from "react-toastify";

// LOGIN
export const login = (email, password) => async (dispatch) => {
  const ToastObjects = {
    pauseOnFocusLoss: false,
    draggable: false,
    pauseOnHover: false,
    autoClose: 2000,
  };
  try {
    dispatch({ type: USER_LOGIN_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      `http://localhost:8000/v1/auth/login`,
      { email, password },
      config,
    );
    console.log(data);
    if (data.user.isAdmin === true) {
      dispatch({ type: USER_LOGIN_SUCCESS, payload: data.user });
    } else if (data.user.isShiper === true) {
      dispatch({ type: USER_LOGIN_SUCCESS, payload: data.user });
    } else {
      toast.error("You are not Admin", ToastObjects);
      dispatch({
        type: USER_LOGIN_FAIL,
      });
    }

    localStorage.setItem("userInfo", JSON.stringify(data.user));
    localStorage.setItem("accessToken", data.accessToken);
    localStorage.setItem("refreshToken", data.refreshToken);
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: message,
    });
  }
};

// LOGOUT
export const logout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: USER_LOGOUT });
  dispatch({ type: USER_LIST_RESET });
};

// ALL USER
export const listUser = (limitUser, search) => async (dispatch) => {
  try {
    dispatch({ type: USER_LIST_REQUEST });
    // const {
    //   userLogin: { userInfo },
    // } = getState();
    const token = localStorage.getItem("accessToken");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.get(
      `http://localhost:8000/v1/user?limit=${limitUser.limit}&search=${search}`,
      config,
    );
    console.log(data);
    dispatch({ type: USER_LIST_SUCCESS, payload: data.users });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: USER_LIST_FAIL,
      payload: message,
    });
  }
};
