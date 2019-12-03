import React, { Fragment } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import logoReact from "./react-logo.png";

import { RouterProps } from "../../interfaces/router-props.interface";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    background: "#fafafafa",
    color: "#303333",
    height: "100%",
    padding: "12% 0"
  },
  main: {},
  basline: {
    fontWeight: "bold"
  },

  root2: {
    flexGrow: 1,
    padding: "8% 0",
    background: "#fff"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

interface HomeProps extends RouterProps {}

const Home = ({ history: { push } }: HomeProps) => {
  const classes = useStyles();

  return (
    <Fragment key="home">
      <div className={classes.root}>
        <CssBaseline />
        <Container component="main" className={classes.main} maxWidth="md">
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            className={classes.basline}
          >
            Py Boilerplate
          </Typography>
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            className={classes.basline}
          >
            {" Develop with React, TypeScript and, Easy Peasy"}
          </Typography>
        </Container>
      </div>

      <div className={classes.root2}>
        <Container component="main" className={classes.main} maxWidth="md">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <p className={classes.paper}>
                The EasyDev based on popular and powerful technological stack.
                That’s why it allows you to create massive and serious projects
                easily.
              </p>
            </Grid>
            <Grid item xs={12} sm={6}>
              <figure className={classes.paper}>
                <img src={logoReact} alt="React logo" />
                <figcaption>React Based App</figcaption>
              </figure>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
                Material-UI: A popular React UI framework
              </Paper>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Paper className={classes.paper}>xs=6 sm=3</Paper>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Paper className={classes.paper}>xs=6 sm=3</Paper>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Paper className={classes.paper}>xs=6 sm=3</Paper>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Paper className={classes.paper}>xs=6 sm=3</Paper>
            </Grid>
          </Grid>
        </Container>
      </div>
    </Fragment>
  );
};

export default Home;
