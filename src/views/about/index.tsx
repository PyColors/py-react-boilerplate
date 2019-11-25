import React, { Fragment } from "react";

import { RouterProps } from "../../interfaces/router-props.interface";

interface AboutProps extends RouterProps {}

const About = ({ history: { push } }: AboutProps) => {
  return <Fragment key="about">About Page</Fragment>;
};

export default About;
