import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const counter = {
  counter: localStorage.getItem("counter")
    ? JSON.parse(localStorage.getItem("counter"))
    : 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState: counter,
  reducers: {
    increament: (state) => {
      state.counter += 1;
      localStorage.setItem("counter", JSON.stringify(state.counter));
    },
    decreament: (state) => {
      if (state.counter > 0) {
        state.counter -= 1;
        localStorage.setItem("counter", JSON.stringify(state.counter));
      }
    },
    deleteItemCounter: (state, action) => {
      if (state.counter - action.payload <= 0) {
        state.counter = null;
        localStorage.setItem("counter", JSON.stringify(state.counter));
      } else {
        state.counter -= action.payload;
        localStorage.setItem("counter", JSON.stringify(state.counter));
      }
    },
  },
});

export const { increament, decreament, deleteItemCounter } =
  counterSlice.actions;

export default counterSlice.reducer;
