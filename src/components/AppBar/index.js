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

import clsx from "clsx";

function SearchAppBar({
  onClickMenu,
  onSearchFieldChange,
  searchFieldValue,
  isDrawerOpen,
}) {
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
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: isDrawerOpen,
        })}
      >
        <Toolbar>
          {menuButton()}
          <Typography className={classes.title} variant="h6" noWrap>
            Larica Ai!
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Código do pedido"
              classes={{
                root: classes.inputRoot,
                input: clsx(classes.inputInput, {
                  [classes.inputInputShift]: isDrawerOpen,
                }),
              }}
              onChange={onSearchFieldChange}
              value={searchFieldValue}
              inputProps={{ "aria-label": "search" }}
            />
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
