import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// interface PayloadAction {
//   id: number;
//   title: string;
//   price: number;
// }

const initialState = {
  cartItems: [], // Use cartItems instead of cartItem for consistency
  amount: 0,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (
      state: any,
      action: PayloadAction<{ id: number; title: string; price: number,image:string }>
    ) => {
      state.total += 1;
      // Check existing products in cart
      const existingItem = state.cartItems.find(
        (item: any) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.total += 1;
      } else {
        state.cartItems = [...state.cartItems, action.payload];
        state.amount += action.payload.price;
      }
    },
    removeFromCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item: any) => item.id === action.payload.id
      );
      if (itemIndex !== -1) {
        state.cartItems.splice(itemIndex, 1);
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
