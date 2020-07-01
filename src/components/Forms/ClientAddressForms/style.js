import { makeStyles } from "@material-ui/core/styles";
import { purple } from "@material-ui/core/colors";

export default makeStyles((theme) => ({
  root: {
    display: "flex",
    height: "100vh",
  },
  boxContainer: {
    display: "flex",
  },
  formContainer: {
    display: "flex",
    height: "100%",
    flexDirection: "column",
   
  },
  textFieldStyle: {
    margin: "5px",
  },
  typographyStyle: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    margin:"10px",
    overflow: "hidden",
    lineHeight: "1.30",
    textOverflow: "ellipsis",
    fontFamily: "Segoe UI",
  },
  buttonStyle:{
    backgroundColor: theme.palette.secondary.main,
  },
}));
