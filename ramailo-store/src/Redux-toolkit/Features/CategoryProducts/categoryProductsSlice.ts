import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const base_Url = import.meta.env.VITE_APP_API_URL;

type CategoryProductState = {
  loading: boolean;
  categories: string[];
  error: boolean | string;
};

const initialState: CategoryProductState = {
  loading: true,
  categories: [],
  error: false,
};

//CategoryData fetched
export const fetchedCategoryProducts = createAsyncThunk(
  "category",
  async () => {
    try {
      const response = await axios.get(`${base_Url}/categories`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const categoryProductsSlice = createSlice({
  name: "categoryProducts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchedCategoryProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchedCategoryProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;

        state.error = true;
      })
      .addCase(fetchedCategoryProducts.rejected, (state) => {
        state.loading = true;
        state.error = "fail";
      });
  },
});

export default categoryProductsSlice.reducer;
