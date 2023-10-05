import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './Root/Root'
import Home from './Components/pages/Home'
import Login from './Components/pages/Login'
import NewsDetails from './Components/NewsDetails'
import About from './Components/pages/About'
import Career from './Components/pages/Career'
import AuthProvider from './AuthProvider'
import Register from './Components/pages/Register'
import PrivateRoute from './PrivateRoute/PrivateRoute'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/news.json"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/career",
        element: <Career></Career>,
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <NewsDetails></NewsDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("/news.json"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
