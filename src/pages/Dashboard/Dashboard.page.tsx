import { useUser } from "../../hooks/useUser";

export const Dashboard = () => {
  const { user, removeUser } = useUser();

  return (
    <>
      Hello {user?.username}
      <button onClick={() => removeUser()}>Logout</button>
    </>
  );
};
