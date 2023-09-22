import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const base_URL = import.meta.env.VITE_APP_API_URL;

interface Product {
    limit: number,
    skip: number,
    total: number,
    products: any[],
  }
  
  interface ProductState {
    loading: boolean;
    products: Product | null;
    error: string | null;
  }
  

//fetching Products
export const fetchProducts = createAsyncThunk("products", async () => {
  try {
    const response = await axios.get(`${base_URL}`);
    return response.data;
  } catch (error) {
    throw error;
  }
});
const initialState: ProductState = {
  loading: true,
  products: null,
  error: null,
};
export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.loading = false;
        state.error = "fail";
      });
  },
});

export default productSlice.reducer;
