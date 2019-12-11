import React, { Fragment } from "react";
import { Typography } from "@material-ui/core";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { APP_NAME } from "../../constants/constants";

import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';

import useStyles from "./style";

const Footer = () => {
  const classes = useStyles();

  return (
    <Fragment key="footer">
      <footer className={classes.footer}>
        <Container maxWidth="md" component="section">
          <Grid container spacing={3}>
            <Grid item xs={5}>
               <Typography
                  variant="h2"
                  component="h3"
                  className={classes.follow}
                  gutterBottom
                >
                  Follow us
                </Typography>
                <TwitterIcon className={classes.icon} color="secondary" />
                <FacebookIcon className={classes.icon} color="secondary" />
              <Typography
                variant="subtitle2"
                component="h3"
                gutterBottom
                >
                {APP_NAME} Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
              </Typography>
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={6}>
              <Typography
                variant="h5"
                component="h3"
                gutterBottom
                className={classes.subscribe}
              >
                Unknown printer took a galley of type and scrambled it.
              </Typography>
              <nav className={classes.toolbarTitle}>
                <Link
                  variant="button"
                  color="textPrimary"
                  href="#"
                  className={classes.link}
                >
                  Privacy policy
                </Link>
                <Link
                  variant="button"
                  color="textPrimary"
                  href="#"
                  className={classes.link}
                >
                  Terms of use
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
            </Grid>
          </Grid>
        </Container>
        <Box mt={5} className={classes.bottom}>
          <Typography variant="body2" align="center" >
            {"Copyright © "}
            <Link color="inherit" href="/">
              {APP_NAME}
            </Link>{" "}
            {new Date().getFullYear()}
          </Typography>
        </Box>
      </footer>
    </Fragment>
  );
};

export default Footer;
