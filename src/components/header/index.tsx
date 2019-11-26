import React, { Fragment } from "react";
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import useStyles from "./style";

const Header = () => {
  const classes = useStyles();

  return (
    <Fragment key="header">
      <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
          <Link variant="button" color="textPrimary" href="/" className={classes.link}>
            App name
            </Link>
          </Typography>
          <nav>
            <Link variant="button" color="textPrimary" href="/about" className={classes.link}>
              About
            </Link>
            <Link variant="button" color="textPrimary" href="/contact" className={classes.link}>
              Contact
            </Link>
          </nav>
          <Button href="#" color="primary" variant="contained" className={classes.link}>
            Sign up
          </Button>
          <Button href="#" color="primary" variant="outlined" className={classes.link}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
}

export default Header;
