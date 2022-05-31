import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import { CartProvider } from "./Components/Cart/Cart";
import { DataProvider } from "./Components/ProductGetApi/GlobalState";
ReactDOM.render(
  <BrowserRouter>
    <CartProvider>
      <DataProvider>
        <App />
      </DataProvider>
    </CartProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
