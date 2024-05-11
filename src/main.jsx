import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// Router
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Component/Page/Home";
import Root from "./Root";
import NotFount from "./Component/NotFount";
import AddBlog from "./Component/Page/AddBlog";
import AllBlogs from "./Component/Page/AllBlogs";
import FeaturedBlogs from "./Component/Page/FeaturedBlogs";
import Wishlist from "./Component/Page/Wishlist";
import LogIn from "./Component/LogIn";
import Register from "./Component/Register";
import AuthProvider from "./AuthProvider/AuthProvider";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Details from "./Component/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFount />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/allBlogs"),
      },
      {
        path: "/addblog",
        element: (
          <PrivateRoute>
            <AddBlog />
          </PrivateRoute>
        ),
      },
      {
        path: "/allblogs",
        element: <AllBlogs />,
        loader: () => fetch("http://localhost:5000/allBlogs"),
      },
      {
        path: "/featuredblogs",
        element: <FeaturedBlogs />,
      },
      {
        path: "/wishlist",
        element: (
          <PrivateRoute>
            <Wishlist />
          </PrivateRoute>
        )
      },
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/Details/:id",
        element: (
          <PrivateRoute>
            <Details />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/allBlogs/${params.id}`),
      },
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
