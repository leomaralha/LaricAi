import React from "react";
import { Routes } from "./router";
import { CartContextProvider } from "./contexts/CartContext";
import { ThemeProvider } from "./contexts/ThemeProvider";
function App() {
  return (
    <ThemeProvider>
      <CartContextProvider>
        <Routes />
      </CartContextProvider>
    </ThemeProvider>
  );
}

export default App;
