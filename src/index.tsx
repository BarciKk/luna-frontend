import React from "react";
import "@mantine/core/styles.css";
import ReactDOM from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import { theme } from "./styles/theme";
import "../src/style.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Page404 } from "./pages/Page404/Page404";
import { Login } from "./components/LoginComponent/Login.component";
import { AuthLayout } from "./components/AuthLayout/Layout.component";
import { Register } from "./components/RegisterComponent/Register.component";
import { ResetPassword } from "./components/ResetPasswordComponent/ResetPassword.component";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout children={<Login />} />,
    errorElement: <Page404 />,
  },
  {
    path: "/accounts/register",
    element: <AuthLayout children={<Register />} />,
    errorElement: <Page404 />,
  },
  {
    path: "/accounts/password/reset",
    element: <AuthLayout children={<ResetPassword />} />,
    errorElement: <Page404 />,
  },
]);

root.render(
  <MantineProvider theme={theme}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </MantineProvider>
);
