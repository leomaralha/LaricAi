import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, IconButton, Paper } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import style from "./style";
const pic =
  "https://static.carrefour.com.br/medias/sys_master/images/images/h10/h46/h00/h00/12175673655326.jpg";

function ItemMenu({ imgUrl, name, description, monetaryValue, onAddToCart }) {
  const classes = style();
  return (
    <Paper className={classes.root} elevation={2}>
      <Grid container>
        <Grid item xs={8}>
          <Grid container style={{ height: "100%" }}>
            <Grid item xs={5} >
              <div className={classes.imageContainer}>
                <img
                  className={classes.image}
                  src={imgUrl || pic}
                  alt="Imagem do produto"
                />
              </div>
            </Grid>
            <Grid item xs={7}>
              <Grid container direction="column" wrap="nowrap">
                <Grid className={classes.textContent} item={12}>
                  <Typography className={classes.productName}>
                    {name}
                  </Typography>
                </Grid>
                <Grid className={classes.textContent} item={12}>
                  <Typography className={classes.description}>
                    {description}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Grid
            container
            justify="space-between"
            alignItems="flex-end"
            direction="column"
          >
            <Grid item>
              <Typography className={classes.monetaryValue}>
                {monetaryValue}
              </Typography>
            </Grid>
            <Grid item>
              <IconButton
                classes={{
                  root: classes.buttonButton,
                }}
                size="medium"
                onClick={onAddToCart}
              >
                <ShoppingCartIcon className={classes.cartIcon} />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default ItemMenu;
