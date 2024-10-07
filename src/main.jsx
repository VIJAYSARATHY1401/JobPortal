import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./Components/Home/Home";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import Statistic from "./Components/Statistic/Statistic";
import AppliedJobs from "./Components/AppliedJobs/AppliedJobs";
import Blog from "./Components/Blog/Blog";
import App from "./App";
import JobDetails from "./Components/JobDetails/JobDetails";
import Login from "./Components/Login";
import Register from "./Components/Register";
import ProfileDashboard from "./Components/ProfileDashboard";
import { AuthProvider } from "./AuthContent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/category.json"),
      },
      // {
      //   path: "statistic",
      //   element: <Statistic/>,
      // },
      {
        path: "appliedjobs",
        element: <AppliedJobs />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "Profile",
        element: <ProfileDashboard />,
      },
      {
        path: "details",
        element: <JobDetails />,
      },
      {
        path: "details/:id",
        element: <JobDetails />,
        loader: () => fetch("/company.json"),
        // loader: ({ params }) => fetch(`company.json/${params.id}`),
      },
      // {
      //   path: "blog",
      //   element: <Blog />,
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
