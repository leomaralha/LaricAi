import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Drawer from "@material-ui/core/Drawer";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles((theme)=>({
  list: {
    width: theme.mixins.toolbar.maxWidth,
  },
}));

export function DrawerMenu({ open, onClose }) {
  const classes = useStyles()
  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <div className={classes.list} role="presentation">
        <List>
          {["Menu", "Carrinho", "Contato"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                <MailIcon/>
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    </Drawer>
  );
}
