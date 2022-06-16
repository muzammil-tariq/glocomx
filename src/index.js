import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./main.scss";

// Common Layout

import { store } from "./redux/store/store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import App from "./app";

const Root = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));
serviceWorker.register();
