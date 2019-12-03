import React, { Fragment } from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { APP_NAME } from "../../constants/constants";
import useStyles from "./style";
import MenuIcon from "@material-ui/icons/Menu";

const Header = () => {
  const classes = useStyles();

  return (
    <Fragment key="header">
      <AppBar
        position="static"
        color="default"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.toolbarTitle}
          >
            <Link
              variant="button"
              color="textPrimary"
              href="/"
              className={classes.link}
            >
              {APP_NAME}
            </Link>
          </Typography>
          <nav>
            <Link
              variant="button"
              color="textPrimary"
              href="/about"
              className={classes.link}
            >
              About
            </Link>
            <Link
              variant="button"
              color="textPrimary"
              href="/contact"
              className={classes.link}
            >
              Contact
            </Link>
          </nav>
          <Button href="/login" color="primary" className={classes.menu}>
            <MenuIcon />
          </Button>

          <Button href="/login" color="primary" className={classes.link}>
            Sign in
          </Button>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default Header;
