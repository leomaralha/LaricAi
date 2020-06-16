import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, TextField, Button, Typography } from "@material-ui/core";
import style from "./style";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },

  campodetextoLogin: {
    border: "solid 1px red",
  },
}));

function Login() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={2}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Typography align="center">Bem vindo</Typography>
        <TextField type="email" />
        <TextField type="password" />
        <Grid item xs={12}>
          <Grid container>
            <Grid item>
              <Button color="primary">CANCELAR</Button>
            </Grid>
            <Grid item>
              <Button color="primary">LOGIN</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Login;
