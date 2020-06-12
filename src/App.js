import React from "react";
import { Routes } from "./router";
import { CartContextProvider } from "./contexts/CartContext";

function App() {
  return (
    <CartContextProvider>
      <Routes />
    </CartContextProvider>
  );
}

export default App;
