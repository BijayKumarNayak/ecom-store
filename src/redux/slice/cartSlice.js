import { createSlice, createSelector } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const initialState = {
  cart: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      console.log(action.payload);
      const existingProduct = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (!existingProduct) {
        state.cart.push(action.payload);
        toast.success("Product added to cart");
      } else {
        alert("Product exist in the cart");
        existingProduct.quantity++;
      }
    },
    incrementQuantity: (state, action) => {
      console.log(action.payload);
      const index = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      console.log(index);
      state.cart[index].quantity += 1;
    },
    decrementQuantity: (state, action) => {
      const index = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      state.cart[index].quantity -= 1;
    },

    removeFromCart: (state, action) => {
      console.log(state.cart);
      console.log(action.payload);
      state.cart = state.cart.filter(
        (product) => product.id !== action.payload
      );
      toast.error("Product removed from cart");
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;

export const selectCartItems = (state) => state.cartProducts.cart;

export const selectTotalPrice = createSelector([selectCartItems], (items) =>
  items.reduce((total, item) => total + item.price * item.quantity, 0)
);
