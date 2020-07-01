import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    color: "#7b7b7b5e",
  },

  "@keyframes loading": {
    from: { opacity: .3, transform: 'scale(1)' },
    to: { opacity: 1, transform: 'scale(1.5)' },
  },

  completed: {
    color: theme.palette.success.main,
  },

  active: {
    color: theme.palette.secondary.main,
    animationName: "$loading",
    animationDuration: "1s",
    animationTimingFunction: "ease-out",
    animationFillMode: "forwards",
    animationIterationCount: "infinite",
    animationDirection: "alternate",
  },

  finished:{
    transform: 'scale(1.8)',
    color: theme.palette.success.dark,
  }
}));
