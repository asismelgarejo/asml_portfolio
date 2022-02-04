import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ROUTE_HOME } from "../toolbox/constants/route-map";

export const PrivateRoute = ({ Component, ...rest }: any) => (
  <Route
    {...rest}
    render={(props: any) => {
      if (false) {
        return (
          <Redirect
            to={{
              pathname: ROUTE_HOME,
              state: { from: props.location },
            }}
          />
        );
      }
      return <Component {...props} exact />;
    }}
  />
);
