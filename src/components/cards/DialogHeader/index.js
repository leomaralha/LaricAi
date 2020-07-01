import React from "react";
import { Grid, IconButton, Box, Typography } from "@material-ui/core";
import useStyles from "./style";
import CloseIcon from "@material-ui/icons/Close";

function DialogHeader({ onClose, title }) {
  const classes = useStyles();
  return (
    <Grid container alignItems="center" jutify='center' className={classes.root}>
      <Grid item >
        <IconButton style={{padding: '8px', color: 'white'}} onClick={onClose}>
          <CloseIcon color="inherit" fontSize="large"/>
        </IconButton>
      </Grid>
      <Grid item className={classes.titleContainer}>
        <Typography className={classes.title}>{title}</Typography>
      </Grid>
    </Grid>
  );
}

export default DialogHeader;
