import React from "react";
import AppBar from "../AppBar";
import { DrawerMenu } from "../Drawer";

function SideMenu({ onSearchFieldChange, searchFieldValue }) {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  return (
    <>
      <AppBar
        onClickMenu={() => setIsDrawerOpen(!isDrawerOpen)}
        isDrawerOpen={isDrawerOpen}
        appBarTitle={"CARDÁPIO"}
      />
      <DrawerMenu open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </>
  );
}

export default SideMenu;
