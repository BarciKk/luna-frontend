import { Navigate, Outlet } from 'react-router-dom';
import { useUser } from 'hooks';
import { UnauthorizedRoutes } from 'enums/Routes.enums';
import { LoadingAnimation } from 'animations/Loading.animation';

type RouteGuardProps = {
  isAuthorized: boolean;
};

export const RouteGuard = ({ isAuthorized }: RouteGuardProps) => {
  const { user, isLoading } = useUser();

  if (isLoading) return <LoadingAnimation />;

  if (isAuthorized && !user) {
    return <Navigate to={UnauthorizedRoutes.login} />;
  }

  return <Outlet />;
};
