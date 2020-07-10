import React from "react";
import { Grid, Box, Typography } from "@material-ui/core";
import useStyles from "./style";
import { NotificationContext } from "../../../contexts/NotificationContext";

const imgPadrao = "https://img.olx.com.br/images/30/308009021184740.jpg";
function ProductDescription({ img, type }) {
  const classes = useStyles();
  const popNotify = React.useContext(NotificationContext);

  const handleClick = async () => {
    debugger;
    await popNotify({
      okText: "Claro!",
      scheme: "snack",
      title: "OOopa, tudubom?",
      cancelText: "Não, obvio.",
      type: "error",
      message: "teste",
      autoHideDuration: null,
    });
  };

  return (
    <Grid container justify="center" alingItems="center">
      <Grid item xs={12}>
        <Box className={classes.imageContainer}>
          <img
            alt="foto do açai"
            src={img || imgPadrao}
            className={classes.image}
          />
        </Box>
      </Grid>

      <Grid
        container
        justify="center"
        className={classes.container}
        onClick={handleClick}
      >
        <Typography>{type}</Typography>
      </Grid>
    </Grid>
  );
}

export default ProductDescription;
