// src/router.js
import {
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import { Dashboard } from "./pages/Dashboard";

const rootRoute = createRootRoute();

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,

  path: "/",
  component: Signin,
});

const signupRoute = createRoute({
  getParentRoute: () => rootRoute,

  path: "/signup",
  component: Signup,
});

const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,

  path: "/dashboard",
  component: Dashboard,
});
// Create route tree
const routeTree = rootRoute.addChildren([
  indexRoute,
  signupRoute,
  dashboardRoute,
]);

export const router = createRouter({ routeTree });
