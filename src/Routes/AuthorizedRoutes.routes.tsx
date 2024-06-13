import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthorizedRoutes } from '../enums/Auth/routes.enums';
import { Dashboard } from '../pages/Dashboard/Dashboard.page';

export const AuthorizedAppContent = () => (
  <Routes>
    <Route path={AuthorizedRoutes.dashboard} element={<Dashboard />}>
      <Route path={AuthorizedRoutes.categories} element="" />
      <Route path={AuthorizedRoutes.habits} element="" />
      <Route path={AuthorizedRoutes.today} element="" />
      <Route path={AuthorizedRoutes.tasks} element="" />
    </Route>

    <Route
      path="*"
      element={<Navigate replace to={AuthorizedRoutes.dashboard} />}
    />
  </Routes>
);
