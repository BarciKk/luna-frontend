import { Route, Routes } from 'react-router-dom';
import { UnauthorizedRoutes } from '../enums/routes.enums';
import { Login } from '../modules/Login/Login';
import { Register } from '../modules/Register/Register';
import { Page404 } from '../pages/Page404/Page404.page';
import { ForgotPassword, ResetPassword } from '../modules/ResetPassword';
import { Welcome } from '../pages/Welcome/Welcome.page';
import { Dashboard } from '../pages/Dashboard/Dashboard.page';
import { useCookies } from '../hooks';
import { cookieKeys } from '../enums/cookiesKeys.enums';
import { TermsAndConditions } from 'pages/TermsAndConditions';

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
