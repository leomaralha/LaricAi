import { makeStyles } from "@material-ui/core/styles";

const family =
  "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif";
export default makeStyles((theme) => ({
  root: {
    display: "flex",
  },

  rootContainer: {
    padding: theme.spacing(2),
  },

  overline: {
    textTransform: "uppercase",
    letterSpacing: "1px",
    fontSize: 12,
    marginBottom: "0.875em",
    display: "inline-block",
    color: theme.palette.secondary.light
  },

  textCompleted:{
    color:theme.palette.success.dark
  },

  secondaryContent: (props) => {
    return {
      marginTop: theme.spacing(2),
      boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
      transition: "0.3s",
      ...(!props.inactive && {
        "&:hover": {
          transform: "translateY(2px)",
          boxShadow: "0 4px 20px 0 rgba(0,0,0,0.12)",
        },
      }),
    };
  },

  heading: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "0.35em",
    fontFamily: family,
  },

  textBody: {
    marginBottom: theme.spacing(2),
    textAlign: 'justify',
    fontSize: "0.95rem",
    letterSpacing: "0.00938em",
    fontFamily: family,
    color: theme.palette.text.secondary,
  },
}));
