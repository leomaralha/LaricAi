import React from "react";
import { Grid, Typography, IconButton, Paper } from "@material-ui/core";
import style from "./style";
const pic =
  "https://static.carrefour.com.br/medias/sys_master/images/images/h10/h46/h00/h00/12175673655326.jpg";


function ItemMenu({ imgUrl, name, description, monetaryValue, onAddToCart }) {
  const classes = style();
  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={2}>
        <Grid className={classes.imageContainer} container wrap="nowrap" spacing={2}>
          <Grid item xs>
            <Typography className={classes.productName}>{name}</Typography>
            <Typography className={classes.description}>{description}</Typography>
            <Typography className={classes.monetaryValue}>{monetaryValue}</Typography>
          </Grid>
          <Grid item xs={4}>
            <div className={classes.imageContainer}>
              <img className={classes.image}
                src={imgUrl}
                alt="Imagem do produto">
              </img>
            </div>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default ItemMenu;
