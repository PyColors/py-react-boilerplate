import React, { Fragment } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import logoReact from "./react-logo.png";
import logoEasyPeasy from "./easy-peasy-logo.png";
import logoMatUi from "./mat-ui-logo.png";
import logoReactSmall from "./react-logo-small.png";
import logoMultilanguage from "./multilanguage-logo.png";

import { RouterProps } from "../../interfaces/router-props.interface";

const useStyles = makeStyles(theme => ({
  page: {
    backgroundImage: `url(${"https://previews.aspirity.com/easydev/img/landing/header_bg.png"})`,
    backgroundRepeat: 'no-repeat'
  },
  root: {
    display: "flex",
    color: "#303333",
    height: "100%",
    padding: "14% 0",

  },
  main: {},
  basline: {
    fontWeight: "bold"
  },

  root2: {
    flexGrow: 1,
    padding: "4% 0",
    background: "transparent"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  sectionTitle: {
    padding: '0 18%',
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
  featureIconContent: {
    display: "flex",
    alignItems: "center",
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    background: '#fafafa',
  },
  featureIcon: {
    height: '24px',
    width: 'auto',
    margin: 'auto',
  }
}));

interface HomeProps extends RouterProps {}

const Home = ({ history: { push } }: HomeProps) => {
  const classes = useStyles();

  return (
    <Fragment key="home">
      <div className={classes.page}>
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
                stack.
                That’s why it allows you to create massive and serious projects
                easily.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={2}>{""}</Grid>
            <Grid item xs={12} sm={4}>
              <figure className={classes.paper}>
                <img src={logoReact} alt="React logo" />
                <Typography
                  variant="subtitle1"
                  component="figcaption"
                  gutterBottom
                  className={classes.sectionTitle}
                >
                  React Based App
                </Typography>
              </figure>
            </Grid>
            <Grid item xs={12} sm={4}>
              <figure className={classes.paper}>
                <img
                  src={logoEasyPeasy}
                  alt="Easy Peas logo"
                  className={classes.logos}
                />
                <Typography
                  variant="subtitle1"
                  component="figcaption"
                  gutterBottom
                  className={classes.sectionTitle}
                >
                  Material-UI: A popular React UI framework
                </Typography>
              </figure>
            </Grid>
            <Grid item xs={12} sm={2}>{""}</Grid>
            <Grid item xs={6} sm={3}>
              <figure className={classes.paper}>
                <img src={logoMatUi} alt="Material-UI logo" />
                <Typography
                  variant="subtitle1"
                  component="figcaption"
                  gutterBottom
                  className={classes.sectionTitle}
                >
                  TypeScript
                </Typography>
              </figure>
            </Grid>
            <Grid item xs={6} sm={3}>
              <figure className={classes.paper}>
                <img src={logoMatUi} alt="Material-UI logo" />
 
                <Typography
                  variant="subtitle1"
                  component="figcaption"
                  gutterBottom
                  className={classes.sectionTitle}
                >
                  Material-UI
                </Typography>
              </figure>
            </Grid>
            <Grid item xs={6} sm={3}>
              <figure className={classes.paper}>
                <img src={logoMatUi} alt="Material-UI logo" />
                <Typography
                  variant="subtitle1"
                  component="figcaption"
                  gutterBottom
                  className={classes.sectionTitle}
                >
                  ESLint
                </Typography>
              </figure>
            </Grid>
            <Grid item xs={6} sm={3}>
              <figure className={classes.paper}>
                <img src={logoMatUi} alt="Material-UI logo" />
                <Typography
                  variant="subtitle1"
                  component="figcaption"
                  gutterBottom
                  className={classes.sectionTitle}
                >
                  Webpack
                </Typography>
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
                variant="h4"
                component="h3"
                gutterBottom
                className={classes.sectionTitle}
              >
                Features 
              </Typography>
            </Grid>
            <Grid item xs={6} sm={2} className={classes.featureBoxIcon}>
              <div className={classes.featureIconContent}>
                <img className={classes.featureIcon} src={logoReactSmall} alt="React logo" />
              </div>
            </Grid>
            <Grid item xs={6} sm={4} className={classes.featureSection}>
              <Typography
                variant="h5"
                component="h5"
                gutterBottom
                className={classes.featureTitle}
              >
                React Hooks
              </Typography>
              <Typography
                variant="subtitle1"
                component="p"
                gutterBottom
                className={classes.featureDescription}
              >
                A JavaScript library for building user interfaces
              </Typography>
            </Grid>

            <Grid item xs={6} sm={2} className={classes.featureBoxIcon}>
              <div className={classes.featureIconContent}>
                <img className={classes.featureIcon} src={logoMultilanguage} alt="Multilanguage logo" />
              </div>
            </Grid>
            <Grid item xs={6} sm={4} className={classes.featureSection}>
              <Typography
                variant="h5"
                component="h5"
                gutterBottom
                className={classes.featureTitle}
              >
                Multilanguage
              </Typography>
              <Typography
                variant="subtitle1"
                component="p"
                gutterBottom
                className={classes.featureDescription}
              >
                Switch to a language service easily
              </Typography>
            </Grid>

            <Grid item xs={6} sm={2} className={classes.featureBoxIcon}>
              <div className={classes.featureIconContent}>
                <img className={classes.featureIcon} src={logoReactSmall} alt="React logo" />
              </div>
            </Grid>
            <Grid item xs={6} sm={4} className={classes.featureSection}>
              <Typography
                variant="h5"
                component="h5"
                gutterBottom
                className={classes.featureTitle}
              >
                Sign In
              </Typography>
              <Typography
                variant="subtitle1"
                component="p"
                gutterBottom
                className={classes.featureDescription}
              >
                Make a Sign In page easily and quickly
              </Typography>
            </Grid>
            <Grid item xs={6} sm={2} className={classes.featureBoxIcon}>
              <div className={classes.featureIconContent}>
                <img className={classes.featureIcon} src={logoReactSmall} alt="React logo" />
              </div>
            </Grid>
            <Grid item xs={6} sm={4} className={classes.featureSection}>
              <Typography
                variant="h5"
                component="h5"
                gutterBottom
                className={classes.featureTitle}
              >
                Sign Up
              </Typography>
              <Typography
                variant="subtitle1"
                component="p"
                gutterBottom
                className={classes.featureDescription}
              >
                Make a Sign Up page easily and quickly
              </Typography>
            </Grid>
            <Grid item xs={6} sm={2} className={classes.featureBoxIcon}>
              <div className={classes.featureIconContent}>
                <img className={classes.featureIcon} src={logoReactSmall} alt="React logo" />
              </div>
            </Grid>
            <Grid item xs={6} sm={4} className={classes.featureSection}>
              <Typography
                variant="h5"
                component="h5"
                gutterBottom
                className={classes.featureTitle}
              >
                Material-UI
              </Typography>
              <Typography
                variant="subtitle1"
                component="p"
                gutterBottom
                className={classes.featureDescription}
              >
                React components for faster and easier web development
              </Typography>
            </Grid>
            <Grid item xs={6} sm={2} className={classes.featureBoxIcon}>
              <div className={classes.featureIconContent}>
                <img className={classes.featureIcon} src={logoReactSmall} alt="React logo" />
              </div>
            </Grid>
            <Grid item xs={6} sm={4} className={classes.featureSection}>
              <Typography
                variant="h5"
                component="h5"
                gutterBottom
                className={classes.featureTitle}
              >
                TypeScript
              </Typography>
              <Typography
                variant="subtitle1"
                component="p"
                gutterBottom
                className={classes.featureDescription}
              >
                A superset of JavaScript that compiles to clean 
              </Typography>
            </Grid>
          </Grid>
        </Container>
        </div>
        </div>
    </Fragment>
  );
};

export default Home;
