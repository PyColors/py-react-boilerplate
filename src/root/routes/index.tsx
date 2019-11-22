import React from "react";
import { Route, Switch } from "react-router";

import { routes } from "./routes";

const Routes = () => {
  return (
    <Switch>
      {routes.map(({ exact, path, component }) => (
        <Route key={path} exact={exact} path={path} component={component} />
      ))}
    </Switch>
  );
};

export default Routes;
