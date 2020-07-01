import React from "react";
import PropTypes from "prop-types";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import SideMenu from "../../components/SideMenu";
import TabFilter from '../../components/TabBody'
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </Box>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },

  tabsRoot: {
    width: "100%",
    boxShadow: "inset 0 -1px 0 0 #E6ECF0",
  },
  indicator: {
    backgroundColor: theme.palette.secondary.light,
  },
}));

const StyledTab = withStyles((theme) => ({
  root: {
    minHeight: 53,
    minWidth: 80,
    "&:hover": {
      backgroundColor: "rgba(29, 161, 242, 0.1)",
      "& $wrapper": {
        color: theme.palette.secondary.light,
      },
    },
    "&$selected": {
      "& *": {
        color: theme.palette.secondary.light,
      },
    },
  },
  selected: {},
  textColorInherit: {
    opacity: 1,
  },
  wrapper: {
    textTransform: "none",
    fontSize: 15,
    fontWeight: 700,
    color: "#657786",
  },
}))(Tab);

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <SideMenu onSearchFieldChange searchFieldValue />
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs"
          classes={{
            root: classes.tabsRoot,
            indicator: classes.indicator,
          }}
        >
          <StyledTab label="Hambuguers" {...a11yProps(0)} />
          <StyledTab label="Pizzas" {...a11yProps(1)} />
          <StyledTab label="Bebidas" {...a11yProps(2)} />
          <StyledTab label={"Açai & Sorvete"} {...a11yProps(3)} />
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0}>
        <TabFilter filter="teste"/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      
    </div>
  );
}
