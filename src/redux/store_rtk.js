import { createAction, createReducer, configureStore } from "@reduxjs/toolkit";

//actions
export const decrement = createAction("counter/decrement");
export const increment = createAction("counter/increment");

//--------------------------------------------
// reducers with "builder callback" notation
const reducer = createReducer({ counter: 5 }, (builder) => {
  builder
    .addCase(decrement, (state, action) => {
      state.counter += action.payload;
    })
    .addCase(increment, (state, action) => {
      state.counter -= action.payload;
    });
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

// store
export const store = configureStore({
  reducer,
});
