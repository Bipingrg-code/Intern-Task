import { AnyAction, ThunkDispatch, configureStore } from "@reduxjs/toolkit";
import productSlice from "../Redux-toolkit/Features/Products/productsSlice";
export const store = configureStore({
  reducer: {
    products: productSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ThunkDispatch<RootState, void, AnyAction>;
