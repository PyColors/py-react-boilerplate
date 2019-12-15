import React, { Fragment } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { RouterProps } from "../../interfaces/router-props.interface";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    color: "#303333",
    height: "100%",
    padding: "14% 0"
  },
  basline: {
    fontSize: "8rem",
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    fontFamily: "arial"
  },
  headerInnerTitlePoint: {
    color: theme.palette.secondary.main
  },
  subBasline: {
    fontSize: "1.5rem",
    textAlign: "right",
    color: "#fff",
  },
  root2: {
    flexGrow: 1,
    padding: "4% 0",
    background: "#222",
    boxShadow:
      "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)"
  },
  sectionTitle: {
    padding: "0 18%",
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    margin: "auto"
  },
}));

interface NotFoundProps extends RouterProps {}

const NotFound = ({ history: { push } }: NotFoundProps) => {
  const classes = useStyles();

  return (
    <Fragment key="not-found">
        <div className={classes.root}>
          <CssBaseline />
          <Container component="main" maxWidth="lg">
            <Typography
              variant="h1"
              component="h1"
              gutterBottom
              className={classes.basline}
            >
              Page not found
              <span className={classes.headerInnerTitlePoint}>_</span>
            </Typography>
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              className={classes.subBasline}
            >
              404
            </Typography>
          </Container>
        </div>
        <div className={classes.root2}>
          <Container component="main" maxWidth="xl">
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography
                  variant="h5"
                  component="h3"
                  gutterBottom
                  className={classes.sectionTitle}
                >
                 We can’t seem to find the page you’re looking for.
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </div>
    </Fragment>
  );
};

export default NotFound;
