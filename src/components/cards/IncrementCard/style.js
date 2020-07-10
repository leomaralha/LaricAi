import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    minHeight: "80px",
  },
  buttonRoot: {
    "&disabled": {
      color: theme.palette.text.primary,
    },
    color: theme.palette.text.primary,
  },
  prefix: {
    fontWeight: 600,
    color: theme.palette.text.primary,
    display: "inline",
  },
  monetaryValue: {
    fontWeight: 500,
    color: theme.palette.secondary.light,
    display: "inline",
  },
  icon:{
   minWidth:"0px",
  },
  addRemoveStyle:{
    background:"linear-gradient(90deg, rgba(218,91,0,1) 0%, rgba(255,214,185,1) 100%)",
    borderRadius:"30px",
  },
}));
