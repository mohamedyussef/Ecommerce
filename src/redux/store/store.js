import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../actions/index";
import cartSlice from "../actions/cartReducer";
const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartSlice,
  },
});

export default store;
