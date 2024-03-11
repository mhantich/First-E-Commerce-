import { createSlice } from "@reduxjs/toolkit";
import { Card } from "react-bootstrap";

const initialState = {
  isCartOpen: false,
  AddAnamation: false,
  cart: [],
  items: [],
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },

    addToCart: (state, action) => {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        console.log(action.payload.color);
        action.payload.color.forEach((element) => {
          console.log(element);
          if (!existingItem.color.includes(element)) {
            existingItem.color.push(element);
          }
        });
        existingItem.quantity += 1;
      } else {
        state.cart = [...state.cart, action.payload];
      }
    },

    removeFromCart: (state, action) => {
      console.log(action.payload.id);
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },

    increaseCount: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.product.id === action.payload.id) {
          item.quantity++;
        }
        return item;
      });
    },

    decreaseCount: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.product.id === action.payload.id && item.quantity >= 1) {
          item.quantity--;
        }
        return item;
      });

      // Remove the item from the cart if its count reaches 1
      state.cart = state.cart.filter(
        (item) =>
          !(item.product.id === action.payload.id && item.quantity === 0)
      );
    },

    setIsCartOpen: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
    isAddAnamation: (state) => {
      state.AddAnamation = !state.AddAnamation;
    },
  },
});

export const {
  setItems,
  addToCart,
  removeFromCart,
  increaseCount,
  decreaseCount,
  setIsCartOpen,
  isAddAnamation
} = cartSlice.actions;

export default cartSlice.reducer;
