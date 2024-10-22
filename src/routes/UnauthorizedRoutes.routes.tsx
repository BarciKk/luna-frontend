import { Route, Routes } from 'react-router-dom';
import { TermsAndConditions } from 'pages/TermsAndConditions';
import { ForgotPassword, ResetPassword } from 'modules/ResetPassword';
import { Page404 } from 'pages/Page404';
import { Dashboard } from 'pages/Dashboard';
import { Register } from 'modules/Register';
import { UnauthorizedRoutes } from 'enums/Routes.enums';
import { Login } from 'modules/Login';

export const UnauthorizedRoutesContent = () => {
  return (
    <Routes>
      <>
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
        <Route
          path={UnauthorizedRoutes.termsAndConditions}
          element={<TermsAndConditions />}
        />
        <Route path="/" element={<Login />} />
        <Route path="*" element={<Page404 />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </>
    </Routes>
  );
};
