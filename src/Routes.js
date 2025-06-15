import React, { lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import { retry } from "./utils/CommonFunctions";
import Navbar from "./components/Navbar";
const Home = lazy(() => retry(() => import("./pages/Home")));
const MoreAboutMe = lazy(() => retry(() => import("./pages/MoreAboutMe")));
const Credentials = lazy(() => retry(() => import("./pages/Credentials")));
const Works = lazy(() => retry(() => import("./pages/Works")));
const Blog = lazy(() => retry(() => import("./pages/Blog")));
const Contact = lazy(() => retry(() => import("./pages/Contact")));
const Service = lazy(() => retry(() => import("./pages/Service")));
const WorkDetails = lazy(() => retry(() => import("./pages/WorkDetails")));
const BlogDetails = lazy(() => retry(() => import("./pages/BlogDetails")));
const FourOhFour = lazy(() => retry(() => import("./pages/FourOhFour")));
const Routes = () => {

  const routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/navbar",
      element: <Navbar />,
    },
    {
      path: "/about",
      element: <MoreAboutMe />,
    },
    {
      path: "/credentials",
      element: <Credentials />,
    },
    {
      path: "/works",
      element: <Works />,
    },
    {
      path: "/blog",
      element: <Blog />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/service",
      element: <Service />,
    },
    {
      path: "/work-details/:slug",
      component: WorkDetails,
      element: <WorkDetails />,
    },
    {
      path: "/blog-details/:slug",
      element: <BlogDetails />,
    },
    {
      path: "/*",
      element: <Navigate replace to="/404" />,
    },
    {
      path: "/404",
      element: <FourOhFour />,
    },
  ]);
  return routes;
};

export default Routes;
