import { Typography } from '@mui/material';
import { useUser } from '../../hooks';
import { useNavigate } from 'react-router-dom';
import { UnauthorizedRoutes } from '../../enums/Auth/routes.enums';

export const Dashboard = () => {
  const { user, jwt, removeUser } = useUser();
  const navigate = useNavigate();
  const shouldRenderLoginButton = !user && !jwt;
  return (
    <>
      {user && (
        <>
          <Typography>{user.username}</Typography>

          <button onClick={() => removeUser()}>logout</button>
        </>
      )}

      {shouldRenderLoginButton && (
        <button onClick={() => navigate(`${UnauthorizedRoutes.login}`)}>
          Login
        </button>
      )}
    </>
  );
};
