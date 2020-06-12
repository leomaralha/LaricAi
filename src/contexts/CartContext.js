/* eslint-disable no-loop-func */
import React, { Component, createContext } from "react";

const CartContext = createContext({});
class CartContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
        throwAlert: this.throwAlert
    };
  }

  throwAlert = (msg) => {
      alert(msg)
  }

  render() {
    return (
      <CartContext.Provider value={this.state}>
        {typeof this.props.children === "function"
          ? this.props.children()
          : this.props.children}
      </CartContext.Provider>
    );
  }
}

export { CartContextProvider, CartContext };
