import React, { Fragment } from "react";

import { RouterProps } from "../../interfaces/router-props.interface";

interface HomeProps extends RouterProps {}

const Home = ({ history: { push } }: HomeProps) => {
  return <Fragment key="home">Home Page</Fragment>;
};

export default Home;
