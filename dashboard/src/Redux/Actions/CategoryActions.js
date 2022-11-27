import {
  CATEGORY_LIST_FAIL,
  CATEGORY_LIST_REQUEST,
  CATEGORY_LIST_SUCCESS,
  CREATE_CATEGORY_REQUEST,
  CREATE_CATEGORY_SUCCESS,
  CREATE_CATEGORY_FAIL,
  DELETE_CATEGORY_REQUEST,
  DELETE_CATEGORY_SUCCESS,
  DELETE_CATEGORY_FAIL,
} from "../Constants/CategoryConstants";
import { logout } from "./userActions";
import axios from "axios";

export const listCategory = () => async (dispatch) => {
  try {
    dispatch({ type: CATEGORY_LIST_REQUEST });
    const token = localStorage.getItem("accessToken");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.get(
      `http://localhost:8000/v1/category`,
      config
    );
    // ?limit=${limitCategory.limit}&search=${search}
    console.log(data.category);
    dispatch({ type: CATEGORY_LIST_SUCCESS, payload: data.category });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: CATEGORY_LIST_FAIL,
      payload: message,
    });
  }
};

export const createCategory =
  ({ name, description }) =>
  async (dispatch) => {
    try {
      dispatch({ type: CREATE_CATEGORY_REQUEST });
      const token = localStorage.getItem("accessToken");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const { data } = await axios.post(
        `http://localhost:8000/v1/category`,

        { name, description },
        config
      );
      console.log(data);
      dispatch({ type: CREATE_CATEGORY_SUCCESS, payload: data });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      if (message === "Not authorized, token failed") {
        dispatch(logout());
      }
      dispatch({
        type: CREATE_CATEGORY_FAIL,
        payload: message,
      });
    }
  };
export const deleteCategory = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_CATEGORY_REQUEST });
    const token = localStorage.getItem("accessToken");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.delete(
      `http://localhost:8000/v1/category/${id}`,
      config
    );
    console.log(data);
    dispatch({ type: DELETE_CATEGORY_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: DELETE_CATEGORY_FAIL,
      payload: message,
    });
  }
};
