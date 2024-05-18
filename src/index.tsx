import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./pages/login/Login";
import UserScreen from "./pages/userScreen/UserScreen";

const router = createBrowserRouter([
  {
    path: "/react-router-testing",
    element: <App />,
    children: [
      { path: "/react-router-testing", element: <Login /> },
      { path: "/react-router-testing/user", element: <UserScreen /> },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
