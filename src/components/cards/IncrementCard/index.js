import React from "react";
import {
  ListItem,
  ListItemText,
  Typography,
  ListItemSecondaryAction,
  IconButton,
  Divider,
  Button,
  ButtonGroup,
  withStyles,
} from "@material-ui/core";
import useStyles from "./style";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import PropTypes from "prop-types";

function IncrementsCard({
  value,
  onAdd,
  amount,
  onRemove,
  productName,
  disableAddBtn = false,
  disableSubBtn = false,
}) {
  const classes = useStyles();

  const secondaryText = (
    <>
      <Typography className={classes.prefix}>Valor un: </Typography>
      <Typography className={classes.monetaryValue}>{"R$" + value}</Typography>
    </>
  );

  return (
    <>
      <Divider component="li" />
      <ListItem className={classes.root}>
        <ListItemText primary={productName} secondary={secondaryText} />
        <ListItemSecondaryAction>
          <ButtonGroup
            variant="text"
            color="secondary"
            aria-label="text secondary button group"
          >
            <div className={classes.addRemoveStyle}>
              <IconButton disabled={disableAddBtn} onClick={onRemove}>
                <RemoveIcon fontSize="small"/>
              </IconButton>
              <Button className={classes.icon}>{amount}</Button>
              <IconButton disabled={disableSubBtn} onClick={onAdd}>
                <AddIcon fontSize="small"/>
              </IconButton>
            </div>
          </ButtonGroup>
        </ListItemSecondaryAction>
      </ListItem>
    </>
  );
}

IncrementsCard.propTypes = {
  value: PropTypes.string,
  onAdd: PropTypes.func,
  amount: PropTypes.number,
  onRemove: PropTypes.func,
  productName: PropTypes.string,
  disableAddBtn: PropTypes.bool,
  disableSubBtn: PropTypes.bool,
};

export default IncrementsCard;
