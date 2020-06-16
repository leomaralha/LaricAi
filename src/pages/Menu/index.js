import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import style from "./style";
import SideMenu from "../../components/SideMenu";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: "100vw",
    height: "70vh",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
  titleBar: {
    background:
      "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
      "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
  icon: {
    color: "white",
  },
}));

const tileData = [
  {
    img:
      "https://media-cdn.tripadvisor.com/media/photo-o/18/1a/d5/1e/casteloes.jpg",
    categoryName: "Pizzas",
    description: "Pizzass de varios sabores preparadas com muito carinho",
  },
  {
    img:
      "https://media-cdn.tripadvisor.com/media/photo-o/18/1a/d5/1e/casteloes.jpg",
    categoryName: "Pizzas",
    description: "Pizzass de varios sabores preparadas com muito carinho",
  },
  {
    img:
      "https://media-cdn.tripadvisor.com/media/photo-o/18/1a/d5/1e/casteloes.jpg",
    categoryName: "Pizzas",
    description: "Pizzass de varios sabores preparadas com muito carinho",
  },
  {
    img:
      "https://media-cdn.tripadvisor.com/media/photo-o/18/1a/d5/1e/casteloes.jpg",
    categoryName: "Pizzas",
    description: "Pizzass de varios sabores preparadas com muito carinho",
  },
  {
    img:
      "https://media-cdn.tripadvisor.com/media/photo-o/18/1a/d5/1e/casteloes.jpg",
    categoryName: "Pizzas",
    description: "Pizzass de varios sabores preparadas com muito carinho",
  },
];

function Menu() {
  const [searchText, setSearchText] = React.useState("");
  const classes = useStyles();
  return (
    <>
      <SideMenu
        onSearchFieldChange={setSearchText}
        searchFieldValue={searchText}
      />
      <div className={classes.root}>
        <Typography>
          Nosso menu
        </Typography>
        <GridList cellHeight={150} spacing={5} className={classes.gridList}>
          {tileData.map((tile, index) => (
            <GridListTile key={index} cols={2} rows={1}>
              <img src={tile.img} alt={tile.categoryName} />
              <GridListTileBar
                title={tile.categoryName}
                titlePosition="bottom"
                subtitle={tile.description}
                actionPosition="right"
                actionIcon={
                  <IconButton
                    aria-label={`star ${tile.categoryName}`}
                    className={classes.icon}
                  >
                    <AddShoppingCartIcon  />
                  </IconButton>
                }
                className={classes.titleBar}
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    </>
  );
}

export default Menu;
