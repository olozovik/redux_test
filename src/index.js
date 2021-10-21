import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { store_slice } from "./redux/store_slice";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store_slice}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
