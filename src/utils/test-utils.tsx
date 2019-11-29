/* eslint-disable no-param-reassign */
import { StoreProvider } from "easy-peasy";
import React, { Component } from "react";
import { IntlProvider } from "react-intl";
import { Route, StaticRouter } from "react-router";

import { getMessagesForLocale } from "../lang/locale";

interface Builder {
  withStore: (s: any) => any;
  withRouter: (s: any) => any;
  withIntl: (s: any) => any;
  build: () => any;
}

export default function renderComponent(ComponentToAdd: any): Builder {
  if (React.isValidElement(ComponentToAdd) === false)
    throw new Error("you have to pass a valid React Component as argument");
  function Builder(this: any): any {
    let store: any = null;
    let location: any = null;
    let locale: any = null;

    this.withStore = (s: any = null) => {
      store = s;
      return this;
    };

    this.withRouter = (l: any = { pathname: "/", url: "/" }) => {
      location = l;
      return this;
    };

    this.withIntl = (l: string) => {
      locale = l;
      return this;
    };

    this.build = () => {
      class ComponentWithProviders extends Component {
        render() {
          if (locale !== null) {
            ComponentToAdd = (
              <IntlProvider
                locale={locale}
                messages={getMessagesForLocale(locale)}
              >
                {ComponentToAdd}
              </IntlProvider>
            );
          }
          if (store !== null) {
            ComponentToAdd = (
              <StoreProvider store={store}>{ComponentToAdd}</StoreProvider>
            );
          }

          if (location !== null) {
            return (
              <StaticRouter location={location.url} context={{}}>
                <Route
                  path={location.pathname}
                  component={() => ComponentToAdd}
                />
              </StaticRouter>
            );
          }
          return ComponentToAdd;
        }
      }
      return ComponentWithProviders;
    };
  }

  return new (Builder as any)();
}
