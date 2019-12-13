import React, { Fragment } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { RouterProps } from "../../interfaces/router-props.interface";

const useStyles = makeStyles(theme => ({
  top: {
    padding: "100px 0",
    background: "#111",
    color: "white"
  },
  innerTop: {
    color: "white"
  },
  main: {
    background: "#fff",
    color: "#575757",
    lineHeight: "2.25rem",
    fontSize: "1.25rem",
    fontFamily: "Akkurat,sans-serif,Helvetica Neue,Helvetica,Arial",
  },
  headerInnerTitle: {
    fontFamily: "arial",
    marginBottom: "0.35em",
    fontWeight: "bold",
    fontSize: "8rem"
  },
  headerInnerTitlePoint: {
    color: theme.palette.secondary.main
  },
  content: {
    background: "#fff",
    borderTop: "solid 14px #333",
    padding: "0 120px"
    // borderLeft: "solid 14px #ffff07",
    // borderRight: "solid 14px #ffff07",
    // borderBottom: "solid 14px #ffff07",
  },
  titleContent: {
    margin: "60px 0 20px",
    fontSize: "3.4375rem",
    lineHeight: "3.75rem",
    fontFamily: "Akkurat-bold,sans-serif,Helvetica Neue,Helvetica,Arial",
    color: "#272c32"
  }
}));

interface ContactProps extends RouterProps {}

const Contact = ({ history: { push } }: ContactProps) => {
  const classes = useStyles();

  return (
    <Fragment key="contact">
      <main className={classes.main}>
        <Container maxWidth="xl" component="section" className={classes.top}>
          <Container maxWidth="lg" component="div" className={classes.innerTop}>
            <Grid item xs={12}>
              <Typography
                variant="h1"
                component="h1"
                gutterBottom
                align="center"
                className={classes.headerInnerTitle}
              >
                Contact
                <span className={classes.headerInnerTitlePoint}>_</span>
              </Typography>
            </Grid>
          </Container>

          <Container maxWidth="lg" component="section">
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Typography variant="h2" component="h3" gutterBottom>
                  
                </Typography>
              </Grid>

              <Grid item xs={6}>
                <Typography variant="h5" component="h3" gutterBottom>
                  Get in touch
                </Typography>
              </Grid>
            </Grid>
          </Container>

        </Container>

        <Container maxWidth="md" component="section" className={classes.content}>
          <Grid container spacing={3}>
            <Grid item xs={12}>

            <Typography variant="h2" component="h3" gutterBottom className={classes.titleContent}>
              Contact us for commercial inquiries, partnerships and coffee dates_
            </Typography>

            <Typography 
              variant="h4" 
              component="h1" 
              gutterBottom
              className={classes.titleContent}
              >
                E-mail
            </Typography>
              <p>
                hello@hello.com
              </p>

              <Typography 
                variant="h4" 
                component="h1" 
                gutterBottom
                className={classes.titleContent}
                >
                  Phone
              </Typography>
              <a href="tel:+33 07 34 89 78 22">+33 07 34 89 78 22</a>
              <Typography 
                variant="h4" 
                component="h1" 
                gutterBottom
                className={classes.titleContent}
                >
                Visit
              </Typography>
              <address>
                18 rue martel <br />
                75 010 <br />
                Paris
              </address>
              <br />
              <br />
            </Grid>
          </Grid>
        </Container>
      </main>
    </Fragment>
  );
};

export default Contact;
