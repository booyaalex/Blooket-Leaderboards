import React from "react";
import ReactDOM from "react-dom/client";
import { Nav } from "./mod/Nav.jsx";
import Index from "./mod/Index.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Nav />
    <RouterProvider router={router} />
  </React.StrictMode>
);
