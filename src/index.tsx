import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

import "./assets/css/bootstrap.css";
import "./assets/css/all.css";
import "./assets/css/fonts.css";
import "./assets/css/styles.css";
import "./assets/css/responsive.css";
import "./assets/datepicker/bootstrap-datetimepicker.css";
import { Provider } from "react-redux";
import store from "app/store";
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
