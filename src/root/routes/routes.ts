import { Route } from "../../interfaces/route.interface";
import Home from "../../views/home";

export const routes: Route[] = [
  {
    path: "home",
    exact: true,
    component: Home
  }
];
