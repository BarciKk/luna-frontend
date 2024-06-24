import { CircularProgress } from '@mui/material';
import { useUser } from '../hooks/useUser';
import { AuthorizedAppContent } from './AuthorizedRoutes.routes';
import { UnauthorizedRoutesContent } from './UnauthorizedRoutes.routes';

export const RoutesWrapper = () => {
  const { user, isLoading } = useUser();

  if (isLoading) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <CircularProgress />
      </div>
    );
  } //! u should add some nice looking loading right there my man

  if (user) return <AuthorizedAppContent />;

  return <UnauthorizedRoutesContent />;
};
