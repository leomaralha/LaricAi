import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    background: "rgb(52,0,0)",
    background:
      "linear-gradient(90deg, rgba(218,91,0,1) 0%, rgba(255,214,185,1) 100%)",
    color: theme.palette.secondary.contrastText,
  },
  title: {
    fontSize: "1.2rem",
    fontWeight: 600,
    textTransform: "uppercase",
  },
  titleContainer: {
    margin: "0 auto",
  },
}));
