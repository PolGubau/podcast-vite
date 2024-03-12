import { HomePage } from "./pages/home";
import { DetailsPage } from "./pages/details";
import { createBrowserRouter } from "react-router-dom";
import React from "react";
import { Chapter } from "./pages/chapter";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        path: "details",
        element: <DetailsPage />,
      },
      {
        path: "chapter",
        element: <Chapter />,
      },
    ],
  },
]);
