import React from "react";
import ReactDOM from "react-dom/client"; // Import correto para React 18
import "./styles/Global.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
