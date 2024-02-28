import { useUser } from '../../hooks/useUser';

export const Dashboard = () => {
  const { user, removeUser } = useUser();

  console.log(user);
  return (
    <>
      {user?.username}
      <button onClick={() => removeUser()}>Logout</button>
    </>
  );
};
