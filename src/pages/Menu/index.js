import React from "react";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import SideMenu from "../../components/SideMenu";
import useStyles from "./style";

const tileData = [
  {
    img:
      "https://media-cdn.tripadvisor.com/media/photo-o/18/1a/d5/1e/casteloes.jpg",
    categoryName: "Pizzas",
    description: "Leo caralha do queru",
  },
  {
    img:
      "https://media-cdn.tripadvisor.com/media/photo-o/18/1a/d5/1e/casteloes.jpg",
    categoryName: "Hamburguer",
    description: "burgue",
  },
  {
    img:
      "https://media-cdn.tripadvisor.com/media/photo-o/18/1a/d5/1e/casteloes.jpg",
    categoryName: "Bebidas",
    description: "agua e coca rs",
  },
  {
    img:
      "https://media-cdn.tripadvisor.com/media/photo-o/18/1a/d5/1e/casteloes.jpg",
    categoryName: "Pizzas",
    description: "Pizzass",
  },
  {
    img:
      "https://media-cdn.tripadvisor.com/media/photo-o/18/1a/d5/1e/casteloes.jpg",
    categoryName: "Pizzas",
    description: "Pizzass",
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
        className={classes.test}        
      />
      
      <div className={classes.root}>
        <GridList cellHeight={150} spacing={0} className={classes.gridList}>
          {tileData.map((tile, index) => (
            <GridListTile key={index} cols={2} rows={1}>
              <img src={tile.img} alt={tile.categoryName} />
              <GridListTileBar
                className={classes.titleBar}
                title={<p className={classes.styleCat}> {tile.categoryName}</p>}
                titlePosition="bottom"
                subtitle={<p className={classes.styleDesc}> {tile.description}</p>}         
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    </>
  );
}

export default Menu;
