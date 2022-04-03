/**
 *
 * index.js
 * This is the entry file for the application
 */

import React from "react";
import ReactDOM from "react-dom";
import { ProductsProvider } from "../app/Context/Product-Context";

import App from "./app";

ReactDOM.render(
  <ProductsProvider>
    <App />
  </ProductsProvider>,
  document.getElementById("root")
);
