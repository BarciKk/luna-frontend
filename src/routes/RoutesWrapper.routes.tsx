import { AuthorizedAppContent } from './AuthorizedRoutes.routes';
import { UnauthorizedRoutesContent } from './UnauthorizedRoutes.routes';
import { useUser } from 'hooks';
import { LoadingAnimation } from 'animations/Loading.animation';

export const RoutesWrapper = () => {
  const { user, isLoading } = useUser();

  if (isLoading) {
    return <LoadingAnimation />;
  }
  if (user) {
    return <AuthorizedAppContent />;
  }
  return <UnauthorizedRoutesContent />;
};
