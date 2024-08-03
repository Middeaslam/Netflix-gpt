import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Browse from "./Browse";
import Login from "./Login";
import React from "react";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />
    },
    {
      path: "/browse",
      element: <Browse />
    }
  ]);

  return <RouterProvider router={appRouter}></RouterProvider>;
};

export default Body;
