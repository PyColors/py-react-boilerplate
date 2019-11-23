import React, { Fragment } from "react";

import { ChildrenProps } from "../../interfaces/children-props";
import { Menu } from "..";
import Content from "../content";
import Header from "../header";

interface LayoutProps extends ChildrenProps {}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Fragment key="layout">
      <Header />
      <Menu />
      {/* to switch the language */}
      {/* <Locale /> */}
      {/* <Snackbar /> */}
      {/* <UserInfos /> */}
      <Content>{children}</Content>
    </Fragment>
  );
};

export default Layout;
