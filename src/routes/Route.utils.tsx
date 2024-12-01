import { AuthorizedRoutes, UnauthorizedRoutes } from 'enums/Routes.enums';
import { Login } from 'modules/Login';
import { Register } from 'modules/Register';
import { ForgotPassword, ResetPassword } from 'modules/ResetPassword';
import { Dashboard } from 'pages/Dashboard';
import { Category } from 'pages/Dashboard/Category/Category.page';
import { Today } from 'pages/Dashboard/Today/Today.page';
import { TermsAndConditions } from 'pages/TermsAndConditions';

const unauthorizedRoutes = [
  { path: UnauthorizedRoutes.login, element: <Login /> },
  { path: UnauthorizedRoutes.register, element: <Register /> },
  {
    path: `${UnauthorizedRoutes.resetPassword}/:token`,
    element: <ResetPassword />,
  },
  { path: UnauthorizedRoutes.forgotPassword, element: <ForgotPassword /> },
  {
    path: UnauthorizedRoutes.termsAndConditions,
    element: <TermsAndConditions />,
  },
];

const authorizedRoutes = [
  { path: AuthorizedRoutes.dashboard, element: <Dashboard /> },
  { path: AuthorizedRoutes.categories, element: <Category /> },
  { path: AuthorizedRoutes.habits, element: null },
  { path: AuthorizedRoutes.today, element: <Today /> },
  { path: AuthorizedRoutes.tasks, element: null },
];

export { authorizedRoutes, unauthorizedRoutes };
