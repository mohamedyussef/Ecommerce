import { createSlice } from "@reduxjs/toolkit";

const cart = {
  cartItem: localStorage.getItem("cartItem")
    ? JSON.parse(localStorage.getItem("cartItem"))
    : [],
  totalPrice: localStorage.getItem("totalPrice")
    ? JSON.parse(localStorage.getItem("totalPrice"))
    : 0,
};
export const cartSlice = createSlice({
  name: "cart",
  initialState: cart,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.cartItem.findIndex((item) => {
        return item.id === action.payload.id;
      });
      if (itemIndex >= 0) {
        state.cartItem[itemIndex].qty += 1;
        state.totalPrice += action.payload.price;
        localStorage.setItem("totalPrice", JSON.stringify(state.totalPrice));
      } else {
        const tempCart = { ...action.payload, qty: 1 };
        state.totalPrice += action.payload.price;
        state.cartItem.push(tempCart);
        localStorage.setItem("totalPrice", JSON.stringify(state.totalPrice));
      }
      localStorage.setItem("cartItem", JSON.stringify(state.cartItem));
    },
    removeOneItem: (state, action) => {
      const itemIndex = state.cartItem.findIndex((item) => {
        return item.id === action.payload.id;
      });
      const remove = state.cartItem.filter((item) => {
        return item.id !== action.payload.id;
      });
      if (state.cartItem[itemIndex].qty != 1) {
        state.cartItem[itemIndex].qty -= 1;
        state.totalPrice -= action.payload.price;
        localStorage.setItem("totalPrice", JSON.stringify(state.totalPrice));
      } else {
        state.cartItem = remove;
        state.totalPrice -= action.payload.price;
        localStorage.setItem("totalPrice", JSON.stringify(state.totalPrice));
      }
      localStorage.setItem("cartItem", JSON.stringify(state.cartItem));
    },
    deleteItem: (state, action) => {
      const itemIndex = state.cartItem.findIndex((item) => {
        return item.id === action.payload.id;
      });
      const remove = state.cartItem.filter((item) => {
        return item.id !== action.payload.id;
      });
      state.totalPrice -= action.payload.price * action.payload.qty;
      state.cartItem = remove;

      localStorage.setItem("cartItem", JSON.stringify(state.cartItem));
      localStorage.setItem("totalPrice", JSON.stringify(state.totalPrice));
    },
  },
});

export const { addToCart, removeOneItem, deleteItem } = cartSlice.actions;

export default cartSlice.reducer;
