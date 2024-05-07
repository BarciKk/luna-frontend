import { Route, Routes } from 'react-router-dom';
import { UnauthorizedRoutes } from '../enums/Auth/routes.enums';
import { Login } from '../modules/Login/Login';
import { Register } from '../modules/Register/Register';
import { AuthLayout } from '../modules/AuthLayout/Layout.component';
import { Page404 } from '../pages/Page404/Page404.page';
import { EnterNewPassword, EnterTheEmail } from '../modules/ResetPassword';

export const UnauthorizedRoutesContent = () => (
  <Routes>
    <Route
      path={UnauthorizedRoutes.login}
      element={
        <AuthLayout>
          <Login />
        </AuthLayout>
      }
    />
    <Route
      path={UnauthorizedRoutes.register}
      element={
        <AuthLayout>
          <Register />
        </AuthLayout>
      }
    />
    <Route
      path="/accounts/resetPassword/:token"
      element={<EnterNewPassword />}
    />
    <Route
      path={UnauthorizedRoutes.forgotPassword}
      element={<EnterTheEmail />}
    />
    <Route path={UnauthorizedRoutes.termsAndConditions} element={<Page404 />} />
    <Route path="*" element={<Page404 />} />
    <Route
      path="/"
      element={
        <AuthLayout>
          <Login />
        </AuthLayout>
      }
    />
  </Routes>
);
