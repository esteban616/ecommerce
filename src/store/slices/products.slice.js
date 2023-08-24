import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const BASE_URL = import.meta.env.VITE_REACT_APP_URL;
const baseUrl = BASE_URL;

const productsSlice = createSlice({
  name: "products",
  initialState: null,
  reducers: {
    setProductsG: (state, acttion) => acttion.payload,
  },
});

export const { setProductsG } = productsSlice.actions;

export default productsSlice.reducer;

export const getAllProductsThunk =
  (url = `${baseUrl}/products`) =>
  (dispatch) => {
    axios
      .get(url)
      .then((res) => {
        dispatch(setProductsG(res.data));
      })
      .catch((err) => console.log(err));
  };
