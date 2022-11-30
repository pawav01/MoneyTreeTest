import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import "./styles/Styles.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Put any other imports below so that CSS from your
// components takes precedence over default styles.

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
