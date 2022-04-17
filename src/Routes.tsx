import { FC } from "react";
import type { RouteObject } from "react-router-dom";
import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import Setting from "./pages/Setting";
import App from "./BasicLayout";

export const HOME_ROUTE="/"
export const SETTING_ROUTE = "/setting";

const routeObjects: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: SETTING_ROUTE, element: <Setting /> },
    ],
  },
];

const Routes: FC = () => useRoutes(routeObjects);

export default Routes;
