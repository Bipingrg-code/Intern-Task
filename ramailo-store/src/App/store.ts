import { AnyAction, ThunkDispatch, configureStore } from "@reduxjs/toolkit";
import productSlice from "../Redux-toolkit/Features/Products/productsSlice";
import categoryProductsSlice from "../Redux-toolkit/Features/CategoryProducts/categoryProductsSlice";
export const store = configureStore({
  reducer: {
    products: productSlice,
    categoryProducts: categoryProductsSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ThunkDispatch<RootState, void, AnyAction>;
