import { BottomNavigation } from 'components/BottomNavigation/BottomNavigation.component';

import { Header } from 'components/Header/Header.component';
import { Outlet } from 'react-router-dom';

export const Dashboard = () => {
  return (
    <>
      <Header />
      <Outlet />
      <BottomNavigation />
    </>
  );
};
