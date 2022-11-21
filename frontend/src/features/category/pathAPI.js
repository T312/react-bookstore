import { createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";

export const getListCategory = createAsyncThunk("listCategory", async () => {
  const { data } = await Axios.get("http://localhost:8000/v1/category");
  return data.category;
});
