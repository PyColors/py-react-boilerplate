import { Route } from "../../interfaces/route.interface";
import Home from "../../views/home";
import About from "../../views/about";
import Contact from "../../views/contact";
import PrivacyPolicy from "../../views/privacy-policy";
import Terms from "../../views/terms";
import SignUp from "../../views/sign-up";
import Login from "../../views/login";

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
    path: "/privacy-policy",
    exact: true,
    component: PrivacyPolicy
  },
  {
    path: "/terms",
    exact: true,
    component: Terms
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
  },
  {
    path: "/login",
    exact: true,
    component: Login
  }
];
