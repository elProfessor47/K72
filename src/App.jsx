import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Agency from "./pages/Agency";
import Layout from "./common/Layout";
import ErrorPage from "./common/ErrorPage";
import Loader from "./loader/Loader";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

//Created by elProfessor

const router = createBrowserRouter([
  {
    element: <Loader />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/",
        element: <Layout />,
        children: [
          { path: "work", element: <Work /> },
          { path: "agency", element: <Agency /> },
          { path: "blog", element: <Blog /> },
          { path: "*", element: <ErrorPage /> },
        ],
      },
    ],
  },
]);


const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
