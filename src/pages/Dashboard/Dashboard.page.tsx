import { useUser } from '../../hooks';

export const Dashboard = () => {
  const { user, removeUser } = useUser();

  return (
    <>
      {user?.username}
      <button onClick={() => removeUser()}>Logout</button>
    </>
  );
};
