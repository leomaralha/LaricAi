import React from "react";
import { Routes } from "./router";
import { CartContextProvider } from "./contexts/CartContext";
import { ThemeProvider } from "./contexts/ThemeProvider";
import {NotificationContextProvider} from './contexts/NotificationContext';


function App() {
  return (
    <ThemeProvider>
      <NotificationContextProvider>
        <CartContextProvider>
          <Routes />
        </CartContextProvider>
      </NotificationContextProvider>
    </ThemeProvider>
  );
}

export default App;
