import React from "react";
import VideoLabelIcon from "@material-ui/icons/VideoLabel";
import CircularProgress from "@material-ui/core/CircularProgress";
import clsx from "clsx";
import Proptypes from "prop-types";
import useStyles from './style'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';


function StepIcon(props) {
  const classes = useStyles();
  const { active, completed, icon } = props;

  const getIcon = React.useCallback(
    () => {
      const icons = {
        1: <PlaylistAddCheckIcon />,
        2: <RestaurantIcon />,
        3: <DirectionsBikeIcon />,
        4: <DoneAllIcon />,
      };


      return icons[String(icon)];
    },
    [active]
  );

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
        [classes.finished]: completed && icon == 4
      })}
    >
      {getIcon()}
    </div>
  );
}

StepIcon.propTypes = {
  active: Proptypes.bool,
  completed: Proptypes.bool,
  icon: Proptypes.number,
};

export default StepIcon