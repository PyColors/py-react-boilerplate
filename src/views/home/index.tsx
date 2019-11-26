import React, { Fragment } from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { RouterProps } from "../../interfaces/router-props.interface";

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
}));

interface HomeProps extends RouterProps {}

const Home = ({ history: { push } }: HomeProps) => {
  
const classes = useStyles();

  return (
    <Fragment key="home">
      <div className={classes.root}>
        <CssBaseline />
        <Container component="main" className={classes.main} maxWidth="sm">
          <Typography variant="h2" component="h1" gutterBottom>
            React boilerplate
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            {'React hooks boilerplate with Easy Peasy'}
          </Typography>
        </Container>
      </div>
    </Fragment>
  );
}

export default Home;
