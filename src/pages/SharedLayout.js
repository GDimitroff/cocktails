import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from '../components/Navbar';

const SharedLayout = () => {
  return (
    <Fragment>
      <Navbar />
      <Outlet />
    </Fragment>
  );
};

export default SharedLayout;
