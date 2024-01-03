import { Route, Routes } from "react-router-dom";
import { UnauthorizedRoutes } from "../enums/Auth/routes.enums";
import { Login } from "../modules/LoginComponent/Login.component";
import { Register } from "../modules/RegisterComponent/Register.component";
import { ResetPassword } from "../modules/ResetPasswordComponent/ResetPassword.component";
import { AuthLayout } from "../modules/AuthLayout/Layout.component";
import { Page404 } from "../pages/Page404/Page404.page";

export const UnauthorizedRoutesContent = () => (
  <Routes>
    <Route
      path={UnauthorizedRoutes.login}
      element={<AuthLayout children={<Login />} />}
    />
    <Route
      path={UnauthorizedRoutes.register}
      element={<AuthLayout children={<Register />} />}
    />
    <Route
      path={UnauthorizedRoutes.resetPassword}
      element={<AuthLayout children={<ResetPassword />} />}
    />
    <Route path={UnauthorizedRoutes.termsAndConditions} element={<Page404 />} />
    <Route path="*" element={<Page404 />} />
  </Routes>
  // page 404 for now untill im gonna update the terms line (23)
);
