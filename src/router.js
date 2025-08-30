// src/router.js
import {
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

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

// Create route tree
const routeTree = rootRoute.addChildren([indexRoute, signupRoute]);

export const router = createRouter({ routeTree });
