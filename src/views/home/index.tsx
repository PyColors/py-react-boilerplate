import React, { Fragment } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import logoReact from "./react-logo.png";
import logoEasyPeasy from "./easy-peasy-logo.png";
import logoMatUi from "./mat-ui-logo.png";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

import { RouterProps } from "../../interfaces/router-props.interface";

const useStyles = makeStyles(theme => ({
  body: {
    backgroundImage: `url(${"https://previews.aspirity.com/easydev/img/landing/header_bg.png"})`
  },
  root: {
    display: "flex",
    background: "#fafafafa",
    color: "#303333",
    height: "100%",
    padding: "14% 0"
  },
  main: {},
  basline: {
    fontWeight: "bold"
  },

  root2: {
    flexGrow: 1,
    padding: "4% 0",
    background: "#fff"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  sectionTitle: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: "#244153",
    fontFamily: "helvetica",
    fontWeight: "bold",
    margin: "auto"
  },
  logos: {
    width: "168px"
  },
  featureSection: {},
  featureDescription: {
    textAlign: "left"
  },
  featureTitle: {
    textAlign: "left",
    fontWeight: "bold"
  },
  featureBoxIcon: {
    display: "flex",
    alignItems: "center",
    flexFlow: "row-reverse"
  },
  featureIcon: {
    display: "flex",
    alignItems: "self-end"
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
            variant="h1"
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
              <Typography
                variant="h5"
                component="h3"
                gutterBottom
                className={classes.sectionTitle}
              >
                Py Boilerplate based on popular and powerful technological
                stack. <br />
                That’s why it allows you to create massive and serious projects
                easily.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <figure className={classes.paper}>
                <img src={logoReact} alt="React logo" />
                <figcaption>React Based App</figcaption>
              </figure>
            </Grid>
            <Grid item xs={12} sm={6}>
              <figure className={classes.paper}>
                <img
                  src={logoEasyPeasy}
                  alt="Easy Peas logo"
                  className={classes.logos}
                />
                <figcaption>
                  Material-UI: A popular React UI framework
                </figcaption>
              </figure>
            </Grid>
            <Grid item xs={6} sm={3}>
              <figure className={classes.paper}>
                <img src={logoMatUi} alt="Material-UI logo" />
                <figcaption>TypeScript</figcaption>
              </figure>
            </Grid>
            <Grid item xs={6} sm={3}>
              <figure className={classes.paper}>
                <img src={logoMatUi} alt="Material-UI logo" />
                <figcaption>Material-UI</figcaption>
              </figure>
            </Grid>
            <Grid item xs={6} sm={3}>
              <figure className={classes.paper}>
                <img src={logoMatUi} alt="Material-UI logo" />
                <figcaption>???</figcaption>
              </figure>
            </Grid>
            <Grid item xs={6} sm={3}>
              <figure className={classes.paper}>
                <img src={logoMatUi} alt="Material-UI logo" />
                <figcaption>???</figcaption>
              </figure>
            </Grid>
          </Grid>
        </Container>
      </div>

      <div className={classes.root2}>
        <Container component="main" className={classes.main} maxWidth="md">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography
                variant="h5"
                component="h3"
                gutterBottom
                className={classes.sectionTitle}
              >
                Features
              </Typography>
            </Grid>
            <Grid item xs={6} sm={3} className={classes.featureBoxIcon}>
              <div className={classes.featureIcon}>
                <LockOutlinedIcon />
              </div>
            </Grid>
            <Grid item xs={6} sm={3} className={classes.featureSection}>
              <Typography
                variant="h5"
                component="h5"
                gutterBottom
                className={classes.featureTitle}
              >
                React App
              </Typography>
              <Typography
                variant="subtitle2"
                component="p"
                gutterBottom
                className={classes.featureDescription}
              >
                A JavaScript library for building user interfaces
              </Typography>
            </Grid>

            <Grid item xs={6} sm={3} className={classes.featureBoxIcon}>
              <div className={classes.featureIcon}>
                <LockOutlinedIcon />
              </div>
            </Grid>
            <Grid item xs={6} sm={3} className={classes.featureSection}>
              <Typography
                variant="h5"
                component="h5"
                gutterBottom
                className={classes.featureTitle}
              >
                React App
              </Typography>
              <Typography
                variant="subtitle2"
                component="p"
                gutterBottom
                className={classes.featureDescription}
              >
                A JavaScript library for building user interfaces
              </Typography>
            </Grid>

            <Grid item xs={6} sm={3} className={classes.featureBoxIcon}>
              <div className={classes.featureIcon}>
                <LockOutlinedIcon />
              </div>
            </Grid>
            <Grid item xs={6} sm={3} className={classes.featureSection}>
              <Typography
                variant="h5"
                component="h5"
                gutterBottom
                className={classes.featureTitle}
              >
                React App
              </Typography>
              <Typography
                variant="subtitle2"
                component="p"
                gutterBottom
                className={classes.featureDescription}
              >
                A JavaScript library for building user interfaces
              </Typography>
            </Grid>
            <Grid item xs={6} sm={3} className={classes.featureBoxIcon}>
              <div className={classes.featureIcon}>
                <LockOutlinedIcon />
              </div>
            </Grid>
            <Grid item xs={6} sm={3} className={classes.featureSection}>
              <Typography
                variant="h5"
                component="h5"
                gutterBottom
                className={classes.featureTitle}
              >
                React App
              </Typography>
              <Typography
                variant="subtitle2"
                component="p"
                gutterBottom
                className={classes.featureDescription}
              >
                A JavaScript library for building user interfaces
              </Typography>
            </Grid>
            <Grid item xs={6} sm={3} className={classes.featureBoxIcon}>
              <div className={classes.featureIcon}>
                <LockOutlinedIcon />
              </div>
            </Grid>
            <Grid item xs={6} sm={3} className={classes.featureSection}>
              <Typography
                variant="h5"
                component="h5"
                gutterBottom
                className={classes.featureTitle}
              >
                React App
              </Typography>
              <Typography
                variant="subtitle2"
                component="p"
                gutterBottom
                className={classes.featureDescription}
              >
                A JavaScript library for building user interfaces
              </Typography>
            </Grid>
            <Grid item xs={6} sm={3} className={classes.featureBoxIcon}>
              <div className={classes.featureIcon}>
                <LockOutlinedIcon />
              </div>
            </Grid>
            <Grid item xs={6} sm={3} className={classes.featureSection}>
              <Typography
                variant="h5"
                component="h5"
                gutterBottom
                className={classes.featureTitle}
              >
                React App
              </Typography>
              <Typography
                variant="subtitle2"
                component="p"
                gutterBottom
                className={classes.featureDescription}
              >
                A JavaScript library for building user interfaces
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </div>
    </Fragment>
  );
};

export default Home;
