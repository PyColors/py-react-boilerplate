import React, { Fragment } from "react";

// import { Menu } from "..";

import { ChildrenProps } from "../../interfaces/children-props";
import Content from "../content";
import Header from "../header";

interface LayoutProps extends ChildrenProps {}

const Layout = ({ children }: LayoutProps) => {
  <Fragment key="layout">
    <Header />
    {/* the tabs */}
    {/* <Menu /> */}
    {/* to switch the language */}
    {/* <Locale /> */}
    {/* <Snackbar /> */}
    {/* <UserInfos /> */}
    <Content>{children}</Content>
  </Fragment>;
};

export default Layout;
