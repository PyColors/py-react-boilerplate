import React, { Fragment } from "react";
import { Typography } from "@material-ui/core";

import useStyles from "./style";

const Footer = () => {
  const classes = useStyles();

  const dateYear = () => {
    return new Date().getFullYear()
  }

  return (
    <Fragment key="footer">
      <Typography className={classes.titleFooter} noWrap>
      Copyright {dateYear()} 
      </Typography>
    </Fragment>
  );
};

export default Footer;