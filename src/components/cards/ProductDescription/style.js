import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    maxWidth: '100vw',
  },
  imageContainer: {
    display: "block",
    overflow: "hidden",
    position: "relative",
  },
  image: {
    maxHeight: "100%",
    maxWidth: "100%",
    display: "block",
    objectFit: "cover",
    textAlign: "center",
    textIndent: "10000px",
  },
  container:{
    background:"rgb(70, 41, 90)",
    margin:"10px",
    padding: "9px",
    borderRadius:"10px",
    color:"white",
  },
}));
