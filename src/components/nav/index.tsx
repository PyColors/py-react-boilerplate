import React, { Fragment } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import Link from "@material-ui/core/Link";
// import Button from '@material-ui/core/Button';
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

import useStyles from "./style";

/**
 * Transform `item` to nice string for URLs
 * `toLowerCase`
 * Replace all spaces by `-`
 * @param item
 */
const transform = (item: string) => {
  return item
    .toLowerCase()
    .split(" ")
    .join("-");
};

const navigations = [
  {
    title: "Company",
    description: ["Team", "History", "About", "Contact"]
  },
  {
    title: "Features",
    description: [
      "Cool stuff",
      "Random one",
      "Developer",
      "Another one"
    ]
  },
  // {
  //   title: "Resources",
  //   description: [
  //     "Sign Up",
  //     "Resource name",
  //     "Another one",
  //     "Final resource"
  //   ]
  // },
  {
    title: "Legal",
    description: ["Privacy policy", "Terms of use", "Team feature", "Locations"]
  }
];

const Nav = () => {
  const classes = useStyles();

  return (
    <Fragment key="nav">
      <nav className={classes.nav}>
        <HighlightOffIcon className={classes.icon} color="primary" />
        <Container maxWidth="md" component="section">
          <Grid
            container
            spacing={0}
            direction="row"
            alignItems="center"
            justify="center"
            style={{ minHeight: "100vh" }}
          >
            {navigations.map(navigation => (
              <Grid item xs={6} sm={3} key={navigation.title}>
                <Typography variant="h6" color="primary" gutterBottom>
                  {navigation.title}
                </Typography>
                <ul>
                  {navigation.description.map(item => (
                    <li key={item}>
                      <Link
                        href={transform(item)}
                        variant="subtitle1"
                        color="textSecondary"
                        className={classes.item}
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Grid>
            ))}
          </Grid>
        </Container>
      </nav>
      <div className={classes.line} />
    </Fragment>
  );
};

export default Nav;
