import React from "react";
import ReactDOM from "react-dom";
// import { Provider } from "react-redux";
// import { createStore, applyMiddleware, compose } from "redux";
// import thunk from "redux-thunk";

// import { reducers } from "./reducers";
import App from "./App";
import "./index.css";
import { ReportStore } from "./store/report-store";
import { StoreProvider } from "./context/report-context";
const store = new ReportStore();

ReactDOM.render(
  // <Provider store={store}>
  <StoreProvider store={store}>
    <App />
  </StoreProvider>,
  // </Provider>,
  document.getElementById("root")
);
