import React from "react";
import {
  Grid,
  Box,
  Button,
  Collapse,
  Typography,
  Paper,
} from "@material-ui/core";
import useStyles from "./style";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
const pic =
  "https://static.carrefour.com.br/medias/sys_master/images/images/h10/h46/h00/h00/12175673655326.jpg";
function CartCardItem({ imgUrl }) {
  const classes = useStyles();
  return (
    <Paper className={classes.root} elevation={2} onClick={()=>window.alert("ALOU")}>
      <Grid container>
        <Grid item>
          {/* imagem */}
            <div className={classes.imageContainer}>
              <img
                className={classes.image}
                src={imgUrl || pic}
                alt="Imagem do produto"
              />
            </div>
          {/* imagem */}
        </Grid>
        <Grid item xs={7}>
          {/* Texto */}
          <Grid container  direction="column">
            <Grid item className={classes.textContent}>
              <Typography className={classes.cardTitle}>Aqui o nome</Typography>
            </Grid>
            <Grid item className={classes.textContent}>
              <Typography className={classes.cardDescription}>
                Aqui normalmente iria alguma descrição
                beemmmmmmmmmmmmmmmmmmmmmmmmmm grannnnnnnnnnnnnnnnnnnnnnnde das
                coisashgjfggggggggggggggggggggggggggggggggggggggggg
              </Typography>
            </Grid>
          </Grid>
          {/* Texto */}
        </Grid>
        <Grid item  >
          {/* action */}
          <Button
            classes={{
              root: classes.addRemoveBtn,
              label: classes.label,
            }}
          >
            <AddIcon/>
          </Button>
          {/* action */}
        </Grid>
        <Grid item xs={12}>
          {/* collapse */}
          {/* collapse */}
        </Grid>
      </Grid>
    </Paper>
  );
}

export default CartCardItem;
