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
  name: {
    ...theme.mixins.cardTitle,
  },
  description: {
    ...theme.mixins.cardDescription,
  },
  infoContainer:{
    margin: theme.spacing(3,1),
  },
  monetaryValue: {
      color: theme.palette.secondary.light,
      fontWeight: 500,
  },
  listRoot: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    position: "relative",
    overflow: "auto",
    maxHeight: '100vh'
  },
  listSection: {
    backgroundColor: "inherit",
  },
  ul: {
    backgroundColor: "inherit",
    padding: 0,
  },

  ListHeader:{
    color: theme.palette.text.primary,
    fontWeight: 500,
    fontSize: '1.3rem',
    letterSpacing: "0.1em",
    textTransform: 'uppercase',
    textAlign: "center",
    marginTop: theme.spacing(1)
  },
  listSubheader:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '50px',
    backgroundColor: theme.palette.grey[200],
  },
  
}));
