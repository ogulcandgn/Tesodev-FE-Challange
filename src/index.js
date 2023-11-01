import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import ErrorPage from "./pages/ErrorPage";
import LinkPage from "./pages/LinkPage";
import ListPage from "./pages/ListPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/listpage",
    element: <ListPage />,
  },
  {
    path: "/linkpage",
    element: <LinkPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
