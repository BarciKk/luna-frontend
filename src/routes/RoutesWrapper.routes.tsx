import { Route, Routes } from 'react-router-dom';
import { RouteGuard } from './RouteGuard';
import { AuthorizedRoutes } from 'enums/Routes.enums';

import { Login } from 'modules/Login';
import { Page404 } from 'pages/Page404';

import { Dashboard } from 'pages/Dashboard';
import { authorizedRoutes, unauthorizedRoutes } from './Route.utils';

export const RoutesWrapper = () => (
  //Unauthorized routes
  <Routes>
    {unauthorizedRoutes.map((route, index) => (
      <Route key={index} path={route.path} element={route.element} />
    ))}
    {/* Authorized routes  */}
    <Route element={<RouteGuard isAuthorized />}>
      <Route path={AuthorizedRoutes.dashboard} element={<Dashboard />}>
        {authorizedRoutes.map(
          (route, index) =>
            route.path !== AuthorizedRoutes.dashboard && (
              <Route key={index} path={route.path} element={route.element} />
            ),
        )}
      </Route>
    </Route>
    <Route path="/" element={<Login />} />
    <Route path="*" element={<Page404 />} />
  </Routes>
);
