import React from 'react';
import { Route, Switch } from 'react-router';

import { NotFound } from '../../components';
import { ProtectedRoute } from './components';
import { routes } from './routes';

const Routes = () => {
  return (
    <Switch>
      {routes.map(({ exact, path, component, protectedBy }) =>
        !protectedBy ? (
          <Route key={path} exact={exact} path={path} component={component} />
        ) : (
          <ProtectedRoute
            key={path}
            exact={exact}
            path={path}
            component={component}
            protectedBy={protectedBy}
          />
        ),
      )}
      <Route key={routes.length} component={NotFound} />
    </Switch>
  );
};

export default Routes;
