import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import style from './style';

const useStyles = makeStyles(style);
function Register() {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item></Grid>
    </Grid>
  );
}

export default Register;