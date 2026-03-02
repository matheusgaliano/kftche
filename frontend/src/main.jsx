import { Elements } from '@stripe/react-stripe-js'
import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyles from "./styles/globalStyles";
import { BrowserRouter } from "react-router-dom";
import { Router } from './routes';
import { ToastContainer } from "react-toastify";
import AppProvider from "./hooks";
import stripePromise from './config/stripeConfig';
import { standardTheme } from './styles/themes/standard'
import { ThemeProvider } from 'styled-components';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={standardTheme}>
      <AppProvider>
        <Elements stripe={stripePromise}>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </Elements>
        <GlobalStyles />
        <ToastContainer autoClose={2000} theme='dark' />
      </AppProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
