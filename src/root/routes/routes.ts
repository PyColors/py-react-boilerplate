import { Route } from "../../interfaces/route.interface";
import Home from "../../views/home";
import About from "../../views/about";
import Contact from "../../views/contact";
import SignUp from "../../views/sign-up";

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
  },
  {
    path: "/contact",
    exact: true,
    component: Contact
  },
  {
    path: "/sign-up",
    exact: true,
    component: SignUp
  }
];
