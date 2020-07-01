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
}));
