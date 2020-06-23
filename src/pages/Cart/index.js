import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import style from "./style";

import ItemMenu from "../../components/cards/ItemMenu";
import CartItem from "../../components/cards/CartItem.js";

const useStyles = makeStyles(style);
function Cart() {
  const classes = useStyles();
  return (
    <>
      <ItemMenu
        name="Coca-Cola"
        description="Somente o texto necessario para definir o produto então pra"
        monetaryValue="R$ 9.99"
        onAddToCart={() => {
          alert("comprou");
        }}
      />
      <CartItem
        name="CocaColaaaaaaaaaaaaaaa"
        description="Somente o texto necessario para definir o produto então pra"
        monetaryValue="R$ 9.99"
        onAddToCart={() => {
          alert("comprou");
        }}
      />
    </>
  );
}

export default Cart;
