import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AuthDashboardPage from "./pages/dashboard/AuthDashboardPage";
import ProjectsDahboardPage from "./pages/dashboard/ProjectsDashboardPage";
import CreateProjectDashboardPage from "./pages/dashboard/CreateProjectDashboardPage";
import NotFoundPage from "./pages/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/dashboard/auth",
    element: <AuthDashboardPage />,
  },
  {
    path: "/dashboard/projects",
    element: <ProjectsDahboardPage />,
  },
  {
    path: "/dashboard/projects/create",
    element: <CreateProjectDashboardPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="main overflow-x-hidden">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
