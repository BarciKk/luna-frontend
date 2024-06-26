import { AuthorizedRoutes } from 'enums/routes.enums';
import { Dashboard } from 'pages/Dashboard';
import { Today } from 'pages/Dashboard/Today/Today.page';
import { Navigate, Route, Routes } from 'react-router-dom';

export const AuthorizedAppContent = () => (
  <Routes>
    <Route path={AuthorizedRoutes.dashboard} element={<Dashboard />}>
      <Route path={AuthorizedRoutes.categories} element="" />
      <Route path={AuthorizedRoutes.habits} element="" />
      <Route path={AuthorizedRoutes.today} element={<Today />} />
      <Route path={AuthorizedRoutes.tasks} element="" />
    </Route>

    <Route
      path="*"
      element={<Navigate replace to={AuthorizedRoutes.dashboard} />}
    />
  </Routes>
);
