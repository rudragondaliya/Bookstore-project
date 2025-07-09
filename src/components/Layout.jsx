import React from 'react';
import Sidebar from './Sidebar'; 
import { Outlet, useLocation } from 'react-router-dom';

const Layout = () => {
  const location = useLocation();
  const hideSidebarPaths = ['/login', '/signup'];


  const shouldHideSidebar = hideSidebarPaths.includes(location.pathname);

  return (
    <div className="d-flex">
      {!shouldHideSidebar && <Sidebar />} 
      <div className="flex-grow-1">
        <Outlet /> 
      </div>
    </div>
  );
};

export default Layout;
