import React from "react";
import ReactDOM from "react-dom/client";
import globalStyles from "./styles/globalStyles";
import { Login } from "./containers/Login"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Login />
    <globalStyles/>
  </React.StrictMode>
);
