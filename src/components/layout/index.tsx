import React, { Fragment } from "react";

import { ChildrenProps } from "../../interfaces/children-props";
import Header from "../header";
// import { Menu } from "..";
import Content from "../content";
import Footer from "../footer";

interface LayoutProps extends ChildrenProps {}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Fragment key="layout">
      <Header />
      {/* <Menu /> */}
      {/* to switch the language */}
      {/* <Locale /> */}
      {/* <Snackbar /> */}
      {/* <UserInfos /> */}
      <Content>{children}</Content>
      <Footer />
    </Fragment>
  );
};

export default Layout;
