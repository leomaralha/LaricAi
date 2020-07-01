import { makeStyles } from "@material-ui/core";
export default makeStyles((theme) => ({

  paper: {
    position: "relative",
    margin: theme.spacing(1),
    background: theme.palette.background.paper,
    padding: theme.spacing(1),
    overflow: "hidden",
    maxHeight: "100%",
    borderRadius:"10px",
    width: '100%'
  },
  
  image: {
    maxHeight: "100%",
    maxWidth: "100%",
    height: "75px",
    width: "75px",
    display: "block",
    objectFit: "cover",
    textAlign: "center",
    textIndent: "10000px",
    borderRadius:"7px",
  },
  imageContainer: {
    display: "flex",
    position: "relative",
    fontSize: "1.25rem",
    alignItems: "center",
    justifyContent: "center",
  },

  productName: {
    ...theme.mixins.cardTitle,
  },
  description: {
    ...theme.mixins.cardDescription,
    color:theme.palette.text.secondary,
    marginLeft:theme.spacing(1)
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
    fontSize: "1.4rem",
    fontWeight: "bold",
    letterSpacing: "0.01em",
    color: theme.palette.secondary.dark,
    marginLeft:theme.spacing(1)
  },

  buttonButton: {
    padding: theme.spacing(1, 0),
  },
  test:{
    display:"flex",
    alignItems:"center",
  }
}));
