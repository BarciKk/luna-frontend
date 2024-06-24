import { Route, Routes } from 'react-router-dom';
import { TermsAndConditions } from 'pages/TermsAndConditions';
import { ForgotPassword, ResetPassword } from 'modules/ResetPassword';
import { cookieKeys } from 'enums/cookiesKeys.enums';
import { useCookies } from 'hooks';
import { Welcome } from 'pages/Welcome';
import { Page404 } from 'pages/Page404';
import { Dashboard } from 'pages/Dashboard';
import { Register } from 'modules/Register';
import { UnauthorizedRoutes } from 'enums/routes.enums';
import { Login } from 'modules/Login';

export const UnauthorizedRoutesContent = () => {
  const { getCookie } = useCookies();
  const isAuthorized = getCookie(cookieKeys.authorized);

  return (
    <Routes>
      {!isAuthorized && (
        <>
          <Route path={UnauthorizedRoutes.welcome} element={<Welcome />} />
          <Route path="*" element={<Page404 />} />
        </>
      )}
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
