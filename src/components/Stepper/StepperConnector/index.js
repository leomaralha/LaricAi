import StepConnector from "@material-ui/core/StepConnector";
import { withStyles } from "@material-ui/core";

export default withStyles((theme) => ({
  completed: {
    "& $line": {
      backgroundColor: theme.palette.success.light,
    },
  },
  active: {
    "& $line": {
        backgroundColor: theme.palette.success.light,
    },
  },
  line: {
    height: 1,
    border: 0,
    borderRadius: 1,
    backgroundColor: '#eaeaf0',
  },
}))(StepConnector);
