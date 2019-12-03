import React, { Fragment } from "react";
import { Typography } from "@material-ui/core";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { APP_NAME } from "../../constants/constants";

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

const footers = [
  {
    title: "Company",
    description: ["Team", "History", "About", "Contact", "Locations"]
  },
  {
    title: "Features",
    description: [
      "Cool stuff",
      "Random feature",
      "Team feature",
      "Developer stuff",
      "Another one"
    ]
  },
  {
    title: "Resources",
    description: [
      "Sign Up",
      "Resource name",
      "Another resource",
      "Final resource"
    ]
  },
  {
    title: "Legal",
    description: ["Privacy policy", "Terms of use"]
  }
];

const Footer = () => {
  const classes = useStyles();

  return (
    <Fragment key="footer">
      <footer className={classes.footer}>
        <Container maxWidth="md" component="footer" className={classes.footer}>
          <Grid container spacing={4} justify="space-evenly">
            {footers.map(footer => (
              <Grid item xs={6} sm={3} key={footer.title}>
                <Typography variant="h6" color="primary" gutterBottom>
                  {footer.title}
                </Typography>
                <ul>
                  {footer.description.map(item => (
                    <li key={item}>
                      <Link
                        href={transform(item)}
                        variant="subtitle1"
                        color="textSecondary"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Grid>
            ))}
          </Grid>
          <Box mt={5}>
            <Typography variant="body2" color="textSecondary" align="center">
              {"Copyright © "}
              <Link color="inherit" href="/">
                {APP_NAME}
              </Link>{" "}
              {new Date().getFullYear()}
            </Typography>
          </Box>
        </Container>
      </footer>
    </Fragment>
  );
};

export default Footer;
