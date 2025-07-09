import React from 'react';
import Sidebar from '../components/Sidebar';

const SidebarLayout = ({ children }) => {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1 p-4" style={{ marginLeft: '220px' }}>
        {children}
      </div>
    </div>
  );
};

export default SidebarLayout;
