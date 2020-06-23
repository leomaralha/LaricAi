import React from "react";
import AppBar from "../AppBar";
import { DrawerMenu } from "../Drawer";
// import { Container } from './styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Icon } from "@material-ui/core";

function SideMenu({ onSearchFieldChange, searchFieldValue }) {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  return (
    <>
      <AppBar
        onClickMenu={() => setIsDrawerOpen(!isDrawerOpen)}
        //onSearchFieldChange={onSearchFieldChange}
        //searchFieldValue={searchFieldValue}
        isDrawerOpen={isDrawerOpen}
        appBarTitle={"CARDÁPIO"}     
      />
      <DrawerMenu open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </>
  );
}

export default SideMenu;
