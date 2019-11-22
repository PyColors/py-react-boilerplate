import { Route } from "../../interfaces/route.interface";
import Home from "../../views/home";
import About from "../../views/about";

export const routes: Route[] = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/about",
    exact: true,
    component: About
  }
];
