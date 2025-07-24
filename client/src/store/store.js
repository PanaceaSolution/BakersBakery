import { configureStore } from "@reduxjs/toolkit";
import heroReducer from "../features/hero/heroSlice";
import productSlice from "../features/product/productSlice";

export const store = configureStore({
  reducer: {
    hero: heroReducer,
    product : productSlice
  },
});
