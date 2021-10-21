import { createAction, createReducer, configureStore } from "@reduxjs/toolkit";

//actions
export const decrement = createAction("counter/decrement");
export const increment = createAction("counter/increment");

//--------------------------------------------
// reducers with "builder callback" notation
const counterReducer = createReducer(5, (builder) => {
  builder
    .addCase(decrement, (state, action) => state - action.payload)
    .addCase(increment, (state, action) => state + action.payload);
});

//--------------------------------------------
//reducer with the "map object" notation
// const reducer = createReducer(
//   { counter: 11 },
//   {
//     [decrement]: (state, action) => ({
//       ...state,
//       counter: state.counter - action.payload,
//     }),
//     [increment]: (state, action) => ({
//       ...state,
//       counter: state.counter + action.payload,
//     }),
//   }
// );

// store_slice
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
