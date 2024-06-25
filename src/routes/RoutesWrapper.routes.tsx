import { AuthorizedAppContent } from './AuthorizedRoutes.routes';
import { UnauthorizedRoutesContent } from './UnauthorizedRoutes.routes';
import { useUser } from 'hooks';
import { LoadingAnimation } from 'animations/Loading.animation';

export const RoutesWrapper = () => {
  const { user, isLoading } = useUser();

  return (
    <>
      {user && <LoadingAnimation isLoading={isLoading} />}
      {!isLoading && user && <AuthorizedAppContent />}
      {!isLoading && !user && <UnauthorizedRoutesContent />}
    </>
  );
};
