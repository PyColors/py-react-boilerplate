import React, { Fragment } from "react";
import { Typography } from "@material-ui/core";
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    backgroundColor:
    theme.palette.type === 'dark' ? theme.palette.grey[800] : theme.palette.grey[200],
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));

const Footer = () => {

  const classes = useStyles();

  return (
    <Fragment key="footer">
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="/">
              App name
            </Link>{' '}
            {new Date().getFullYear()}
          </Typography>
        </Container>
      </footer>   
    </Fragment>
  );
};

export default Footer;
