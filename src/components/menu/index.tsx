import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";

import { withRouter } from "react-router-dom";

import { RouterProps } from "../../interfaces/router-props.interface";
import { PartialMenu } from "./components";
import { homeMenu, paths } from "./menu.constants";
import { makeStyles } from "@material-ui/core/styles";
import { cleanPathname } from "./menu.utils";

interface MenuProps extends RouterProps {}

const useStyles = makeStyles(theme => ({
  indicator: {
    backgroundColor: "#ffff07"
  }
}));

const MenuWithRouter = ({ location: { pathname } }: MenuProps) => {
  const classes = useStyles();
  const cleanedPathname = cleanPathname(pathname, paths);
  return (
    <AppBar position="static">
      <Tabs
        classes={{
          indicator: classes.indicator
        }}
        value={0}
        variant="scrollable"
        scrollButtons="on"
        indicatorColor="secondary"
      >
        <PartialMenu items={homeMenu} pathname={cleanedPathname} />
      </Tabs>
    </AppBar>
  );
};
const Menu = withRouter((props: MenuProps) => <MenuWithRouter {...props} />);

export default Menu;
