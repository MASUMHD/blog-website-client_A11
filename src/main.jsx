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
import Update from "./Component/Update";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFount />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("https://blogs-news-pi.vercel.app/allBlogs"),
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
        loader: () => fetch("https://blogs-news-pi.vercel.app/allBlogs"),
      },
      {
        path: "/featuredblogs",
        element: <FeaturedBlogs />,
        loader: () => fetch("https://blogs-news-pi.vercel.app/allBlogs"),
      },
      {
        path: "/wishlist",
        element: (
          <PrivateRoute>
            <Wishlist />
          </PrivateRoute>
        ),
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
          fetch(`https://blogs-news-pi.vercel.app/allBlogs/${params.id}`),
      },
      {
        path: "update/:id",
        element: (
          <PrivateRoute>
            <Update />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://blogs-news-pi.vercel.app/allBlogs/${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
