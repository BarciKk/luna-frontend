import React from "react";
import "@mantine/core/styles.css";
import ReactDOM from "react-dom/client";
import { theme } from "./styles/theme";
import "@mantine/notifications/styles.css";
import "../src/style.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Login } from "./modules/LoginComponent/Login.component";
import { AuthLayout } from "./modules/AuthLayout/Layout.component";
import { Register } from "./modules/RegisterComponent/Register.component";
import { ResetPassword } from "./modules/ResetPasswordComponent/ResetPassword.component";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { QueryClient, QueryClientProvider } from "react-query";
import { Dashboard } from "./pages/Dashboard/Dashboard.page";
import { Page404 } from "./pages/Page404/Page404.page";
import {
  AuthorizedRoutes,
  UnauthorizedRoutes,
} from "./enums/Auth/routes.enums";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  {
    path: AuthorizedRoutes.login,
    element: <AuthLayout children={<Login />} />,
    errorElement: <Page404 />,
  },
  {
    path: AuthorizedRoutes.register,
    element: <AuthLayout children={<Register />} />,
    errorElement: <Page404 />,
  },
  {
    path: AuthorizedRoutes.resetPassword,
    element: <AuthLayout children={<ResetPassword />} />,
    errorElement: <Page404 />,
  },
  { path: UnauthorizedRoutes.dashboard, element: <Dashboard /> },
]);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <MantineProvider theme={theme}>
        <Notifications />
        <RouterProvider router={router} />
      </MantineProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
