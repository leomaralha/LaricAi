import React from "react";
import { Grid } from "@material-ui/core";
import useStyles from "./style";
import Button from "@material-ui/core/Button";
import ProductDetailsForm from "../../Forms/ProductDetailsForm";

function FooterAddCart({ value }) {
  const classes = useStyles();
  return (
    <>
      <Button
        variant="contained"
        color="secondary"
        className={classes.btnAddCart}
      >
        Adicionar R$ {value.toFixed(2)}
      </Button>
    </>
  );
}

export default FooterAddCart;
