import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCartOpen: false,
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
      

          state.cart = [...state.cart, action.payload];
        
    
      },
  
      removeFromCart: (state, action) => {
        state.cart = state.cart.filter((item) => item.payload.product.id !== action.payload.id);
      },
  
      increaseCount: (state, action) => {
        state.cart = state.cart.map((item) => {
          if (item.payload.product.id === action.payload.id) {
            item.payload.quantity++;
          }
          return item;
        });
      },
  
     
    
      decreaseCount: (state, action) => {
        state.cart = state.cart.map((item) => {
          if (item.payload.product.id  === action.payload.id && item.payload.quantity.id  >= 1) {
            item.payload.quantity--;
          }
          return item;
        });
      
        // Remove the item from the cart if its count reaches 1
        state.cart = state.cart.filter((item) => !(item.payload.product.id === action.payload.id && item.quantity === 0));
      },
      
  
      setIsCartOpen: (state) => {
        state.isCartOpen = !state.isCartOpen;
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
  } = cartSlice.actions;
  
  export default cartSlice.reducer;
  