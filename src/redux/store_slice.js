import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: 11,
  reducers: {
    decrement(state, action) {
      return state - action.payload;
    },
    increment(state, action) {
      return state + action.payload;
    },
  },
});

export const store_slice = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export const { decrement, increment } = counterSlice.actions;
