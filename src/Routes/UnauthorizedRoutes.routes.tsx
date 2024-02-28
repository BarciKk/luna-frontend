import { Route, Routes } from 'react-router-dom';
import { UnauthorizedRoutes } from '../enums/Auth/routes.enums';
import { Login } from '../modules/Login/Login';
import { Register } from '../modules/Register/Register';
import { ResetPassword } from '../modules/ResetPassword/ResetPassword.module';
import { AuthLayout } from '../modules/AuthLayout/Layout.component';
import { Page404 } from '../pages/Page404/Page404.page';
import {
  EnterNewPassword,
  EnterTheEmail,
  EnterThePin,
} from '../modules/ResetPassword';

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
      path={UnauthorizedRoutes.resetPassword}
      element={
        <AuthLayout>
          <ResetPassword />
        </AuthLayout>
      }
    >
      <Route path="step1" element={<EnterTheEmail />} />
      <Route path="step2" element={<EnterThePin />} />
      <Route path="step3" element={<EnterNewPassword />} />
    </Route>
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
