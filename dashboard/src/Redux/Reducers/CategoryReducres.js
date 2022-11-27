import {
  CATEGORY_LIST_FAIL,
  CATEGORY_LIST_REQUEST,
  CATEGORY_LIST_RESET,
  CATEGORY_LIST_SUCCESS,
  CREATE_CATEGORY_REQUEST,
  CREATE_CATEGORY_SUCCESS,
  CREATE_CATEGORY_FAIL,
  CREATE_CATEGORY_RESET,
  DELETE_CATEGORY_REQUEST,
  DELETE_CATEGORY_SUCCESS,
  DELETE_CATEGORY_FAIL,
  DELETE_CATEGORY_RESET,
} from "../Constants/CategoryConstants";

export const categoryListReducer = (state = { category: [] }, action) => {
  switch (action.type) {
    case CATEGORY_LIST_REQUEST:
      return { loading: true, category: [] };
    case CATEGORY_LIST_SUCCESS:
      return { ...state, loading: false, category: action.payload };
    case CATEGORY_LIST_FAIL:
      return { loading: false, category: action.payload };
    case CATEGORY_LIST_RESET:
      return { category: [] };
    default:
      return state;
  }
};
export const createCategoryReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_CATEGORY_REQUEST:
      return { loading: true, category: [] };
    case CREATE_CATEGORY_SUCCESS:
      return { loading: false, category: action.payload };
    case CREATE_CATEGORY_FAIL:
      return { loading: false, category: action.payload };
    case CREATE_CATEGORY_RESET:
      return {};
    default:
      return state;
  }
};

export const deleteCategoryReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_CATEGORY_REQUEST:
      return { loading: true };
    case DELETE_CATEGORY_SUCCESS:
      return { loading: false, message: action.payload };
    case DELETE_CATEGORY_FAIL:
      return { loading: false, message: action.payload };
    case DELETE_CATEGORY_RESET:
      return {};
    default:
      return state;
  }
};
