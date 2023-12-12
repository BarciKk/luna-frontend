import React from "react";
import "@mantine/core/styles.css";
import ReactDOM from "react-dom/client";
import { theme } from "./styles/theme";
import "@mantine/notifications/styles.css";
import "../src/style.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Page404 } from "./pages/Page404/Page404";
import { Login } from "./modules/LoginComponent/Login.component";
import { AuthLayout } from "./modules/AuthLayout/Layout.component";
import { Register } from "./modules/RegisterComponent/Register.component";
import { ResetPassword } from "./modules/ResetPasswordComponent/ResetPassword.component";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

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
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <MantineProvider theme={theme}>
        <Notifications />
        <RouterProvider router={router} />
      </MantineProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
