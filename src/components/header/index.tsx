import React from "react";

import { APP_NAME } from "../../constants/constants";
import useStyles from "./style";

const Header = () => {
  const classes = useStyles();

  return (
    <header>
      <p className={classes.title}>{APP_NAME}</p>
    </header>
  );
};

export default Header;
