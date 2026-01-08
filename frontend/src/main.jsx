import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyles from "./styles/globalStyles";
import { Login } from "./containers/Login"
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyles/>
    <Login />
    <ToastContainer autoClose={2000} theme='dark'/>
  </React.StrictMode>,
);
