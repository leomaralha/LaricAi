import React, { useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import style from "./style";
import { CartContext } from "../../contexts/CartContext";

const useStyles = makeStyles(style);
function LandPage() {
  const cartContext = useContext(CartContext);
  const classes = useStyles();

  useEffect(() => {
    cartContext.throwAlert("landpage montada");
  }, []);

  return (
    <Grid container>
      <Grid item>DEVAIR É UM GAYZÃO</Grid>
    </Grid>
  );
}

export default LandPage;
