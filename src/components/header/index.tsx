import React, { Fragment } from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

import useStyles from "./style";

const Header = () => {
  const classes = useStyles();

  return (
    <Fragment key="header">
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Typography className={classes.title} noWrap>
            App name
          </Typography>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default Header;
