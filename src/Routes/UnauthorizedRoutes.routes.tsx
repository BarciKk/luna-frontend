import { Route, Routes } from 'react-router-dom';
import { UnauthorizedRoutes } from '../enums/Auth/routes.enums';
import { Login } from '../modules/Login/Login';
import { Register } from '../modules/Register/Register';
import { Page404 } from '../pages/Page404/Page404.page';
import { ForgotPassword, ResetPassword } from '../modules/ResetPassword';

export const UnauthorizedRoutesContent = () => (
  <Routes>
    <Route path={UnauthorizedRoutes.login} element={<Login />} />
    <Route path={UnauthorizedRoutes.register} element={<Register />} />
    <Route
      path={`${UnauthorizedRoutes.resetPassword}/:token`}
      element={<ResetPassword />}
    />
    <Route
      path={UnauthorizedRoutes.forgotPassword}
      element={<ForgotPassword />}
    />
    <Route path={UnauthorizedRoutes.termsAndConditions} element={<Page404 />} />
    <Route path="*" element={<Page404 />} />
    <Route path="/" element={<Login />} />
  </Routes>
);
