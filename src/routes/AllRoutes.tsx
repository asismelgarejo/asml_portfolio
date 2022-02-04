import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { homeRoutes } from "./nav-routes";
import { PrivateRoute } from "./PrivateRoute";

const AllRoutes = () => {
  const moduleHome = homeRoutes.map(({ path, name, Component }, key) => (
    <PrivateRoute
      key={`${key}-${name}`}
      path={path}
      exact
      component={({ location }: any) => {
        return <Component />;
      }}
    />
  ));
  return (
    <Router>
      <Switch>{moduleHome}</Switch>
    </Router>
  );
};

export default AllRoutes;
