import React, { Fragment } from "react";

import { RouterProps } from "../../interfaces/router-props.interface";

interface ContactProps extends RouterProps {}

const Contact = ({ history: { push } }: ContactProps) => {
  return <Fragment key="contact">Contact Page</Fragment>;
};

export default Contact;
