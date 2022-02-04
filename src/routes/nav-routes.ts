import React from "react";
import { ROUTE_HOME } from "../toolbox/constants/route-map";

import { Home } from "../views/Home";

export interface INavRoute {
  name: string;
  path: string;
  Component: React.ReactNode;
  merge?: string;
}

export const homeRoutes = [
  {
    name: "Inicio",
    path: ROUTE_HOME,
    Component: Home,
  },
];

export const navRoutes: INavRoute[] = [...homeRoutes];
