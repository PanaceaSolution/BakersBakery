import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const Status = Object.freeze({
  Loading: "loading",
  Success: "success",
  Error: "error",
});

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    status: Status.Loading,
  },
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;

export function getAllProducts() {
  return async function getAllProductsThunk(dispatch) {
    dispatch(setStatus(Status.Loading));
    try {
      const response = await axios.get("http://localhost:3000/api/v1/products");
      dispatch(setProducts(response.data.products)); // Corrected line
      dispatch(setStatus(Status.Success));
    } catch (error) {
      dispatch(setStatus(Status.Error));
    }
  };
}
