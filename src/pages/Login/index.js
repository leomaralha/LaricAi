import React from "react";
import { Grid, TextField, Button, Typography } from "@material-ui/core";
import useStyles from "./style";

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
