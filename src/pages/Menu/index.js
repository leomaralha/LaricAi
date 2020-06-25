import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import SideMenu from "../../components/SideMenu";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexFlow:"column wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    display:"flex",
    flexFlow:"column wrap",

    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ()",//Defines a 3D translation, using only the value for the Z-axis
  },
  titleBar: {
    display: "flex",
    flexFlow:"column wrap",
     background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    
    height: "auto",
  },
  styleCat: {
    marginTop:"10px",
    textAlign: "center",
    fontSize: "2rem",
    fontFamily:"Arial Narrowl",
  },
  styleDesc:{
    textAlign: "center",
    fontSize: "1rem",
    
  },
}));

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
    categoryName: "Pizzas",
    description: "Pizzass",
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
