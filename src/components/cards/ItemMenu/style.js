import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  root: {
    position: "relative",
    margin: theme.spacing(1),
    background: theme.palette.background.paper,
    padding: theme.spacing(1),
    overflow: "hidden",
    maxHeight: "100px",
  },
  image: {
    maxHeight: "100%",
    maxWidth: "100%",
    display: "block",
    objectFit: "cover",
    textAlign: "center",
    textIndent: "10000px",
  },
  imageContainer: {
    height: "96px",
    width: "96px",
    display: "flex",
    position: "relative",
    fontSize: "1.25rem",
    alignItems: "center",
    flexShrink: "0",
    justifyContent: "center",
  },

  productName: {
    ...theme.mixins.cardTitle,
  },
  description: {
    ...theme.mixins.cardDescription,
  },
  cartIcon: {
    backgroundColor: theme.palette.secondary.dark,
    padding: theme.spacing(1, 3),
    color: theme.palette.secondary.contrastText,
    borderRadius: "4px",
  },

  textContent: {
    textOverflow: "ellipsis",
    lineHeight: "1.30",
  },

  monetaryValue: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    letterSpacing: "0.01em",
    textDecoration: "underline",
    color: theme.palette.secondary.main,
  },

  buttonButton: {
    padding: theme.spacing(1, 0),
  },
}));
