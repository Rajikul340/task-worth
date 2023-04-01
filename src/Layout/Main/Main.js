import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './NavBar';

const Main = () => {

    return (
        <div className="">
        <Navbar />
        <div
        >
          <Outlet />
        </div>
      </div>
    );
};

export default Main;