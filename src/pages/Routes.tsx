import { Suspense, lazy } from "react";
import type { RouteObject } from "react-router";
import LoadingScreen from "./LoadingScreen";
import Layout from "components/Layout";
import Blog from "blog/Blog";
import TextEditor from "components/TextEditor";
import Chart from "dashboard/Chart";

const Loadable = (Component: any) => (props: JSX.IntrinsicAttributes) =>
  (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );

// *  AUTHENTICATION PAGES
const Login = Loadable(lazy(() => import("components/Login")));
const Register = Loadable(lazy(() => import("components/Register")));

//  * HOME PAGE
const Posts = Loadable(lazy(() => import("components/Posts")));

const routes: RouteObject[] = [
  {
    path: "authentication",
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },

  {
    path: "*",
    element: <Layout />,
    children: [
      {
        path: "posts",
        element: <Posts />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "text-editor",
        element: <TextEditor />,
      },
      {
        path: "chart",
        element: <Chart />,
        children: [
          {
            path: "blog",
            element: <Blog />,
          },
          {
            path: "text-editor",
            element: <TextEditor />,
          },
        ],
      },
    ],
  },
];

export default routes;
