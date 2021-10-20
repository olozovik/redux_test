import { createStore } from "redux";

// types
const DECREMENT = "counter/decrement";
const INCREMENT = "counter/increment";

// actions
export const decrement = (payload) => ({
  type: DECREMENT,
  payload,
});

export const increment = (payload) => ({
  type: INCREMENT,
  payload,
});

// reducer
const reducer = (state = 5, action) => {
  switch (action.type) {
    case DECREMENT: {
      return state - action.payload;
    }
    case INCREMENT: {
      return state + action.payload;
    }
    default:
      return state;
  }
};

// store
export const store = createStore(reducer);
