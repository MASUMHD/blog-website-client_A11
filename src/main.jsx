import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// Router
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/Page/Home';
import Root from './Root';
import NotFount from './Component/NotFount';
import AddBlog from './Component/Page/AddBlog';
import AllBlogs from './Component/Page/AllBlogs';
import FeaturedBlogs from './Component/Page/FeaturedBlogs';
import Wishlist from './Component/Page/Wishlist';
import LogIn from './Component/LogIn';
import Register from './Component/Register';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <NotFount/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/addblog',
        element: <AddBlog/>
      },
      {
        path: '/allblogs',
        element:<AllBlogs/>
      },
      {
        path:'/featuredblogs',
        element: <FeaturedBlogs/>
      },
      {
        path: '/wishlist',
        element: <Wishlist/>
      },
      {
        path:'/login',
        element: <LogIn/>
      },
      {
        path: '/register',
        element: <Register/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
