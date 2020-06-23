import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import useStyles from "./styles";
import PropTypes from "prop-types";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Fade from "@material-ui/core/Fade";


import ShoppingCartSharpIcon from '@material-ui/icons/ShoppingCartSharp';
import Badge from '@material-ui/core/Badge';
import { Icon } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';

import clsx from "clsx";

function SearchAppBar({ onClickMenu, isDrawerOpen, appBarTitle }) {

  const classes = useStyles();



  const menuButton = () =>
    isDrawerOpen ? (
      <Fade in={true} timeout={500}>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="open drawer"
          onClick={onClickMenu}
        >
          <ArrowBackIosIcon />
        </IconButton>
      </Fade>
    ) : (
        <Fade in={true} timeout={500}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={onClickMenu}
          >
            <MenuIcon />
          </IconButton>
        </Fade>
      );

  return (
    <div className={classes.root}>
      <AppBar position="static" color="secondary" className={clsx(classes.appBar, { [classes.appBarShift]: isDrawerOpen, })}>
        <Toolbar className={classes.actionBar}>
          <div className={classes.title}> 
            {menuButton()}
          </div>
          <Typography className={classes.title} variant="h5">
            {appBarTitle}
          </Typography>

          <div>
            <IconButton
              color="inherit"
            >
              <Badge badgeContent={0} color="error" showZero>
                <ShoppingCartSharpIcon> </ShoppingCartSharpIcon>
              </Badge>
            </IconButton>
          </div>

        </Toolbar>
      </AppBar>
    </div>
  );
}

SearchAppBar.propTypes = {
  onClickMenu: PropTypes.func,
  onSearchFieldChange: PropTypes.func,
  searchFieldValue: PropTypes.string,
};

SearchAppBar.defaultProps = {
  searchFieldValue: "",
};

export default SearchAppBar;
