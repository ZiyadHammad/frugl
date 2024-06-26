import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import store from "./store.js";
import { Provider } from "react-redux";

import MainLayout from "./layouts/MainLayout";
import ChildLayout from "./layouts/ChildLayout";

import PrivateRoute from "./utils/PrivateRoute.jsx";
import NotFound from './pages/NotFound.jsx'
import Cron from './pages/Cron.jsx'

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Contact from './pages/Contact.jsx'

import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import Scraper from './pages/Scraper';
import MyProducts from './pages/MyProducts';
import ProductDetail from './pages/ProductDetail'

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "cron",
        element: <Cron />,
      }
    ]
  },
  {
    element: <ChildLayout />,
    path: '/',
    children: [
      {
        element: <PrivateRoute />,
        children: [
          {
            element: <Dashboard />,
            path: 'dashboard'
          },
          {
            element: <Scraper /> ,
            path: 'scraper'
          },
          {
            element: <MyProducts /> ,
            path: 'products'
          },
          {
            element: <ProductDetail /> ,
            path: 'products/:productId'
          },
          {
            element: <Settings /> ,
            path: 'settings'
          },
        ]
      },
    ]
  },
  {
    element: <NotFound />,
    path: '*'
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
