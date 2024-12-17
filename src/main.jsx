import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import Home from './pages/home/index';
import SignIn from './auth/signin/Signin';
import Register from './auth/register/Register';

const router = createBrowserRouter([
  // {
  //   path: "*",
  //   element: <NotFound />,
  // },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/register",
    element: <Register />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Provider> */}
      {/* <PersistGate loading={null}> */}
        <RouterProvider router={router} />
      {/* </PersistGate> */}
    {/* </Provider> */}
  </React.StrictMode>
);
