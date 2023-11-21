import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// import "../config.mjs";

// bootstrap implementations
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
