import React, { useEffect, useState } from 'react';

import Navigation from '../Navigation/Navigation';
import { Outlet } from 'react-router-dom';
import Wheader from '../Wheader/Wheader';
import Sidebar from '../SideBar/SideBar';
import LabSelection from './StaffLabs';
import Footer from '../Footer/Footer'
function Layout() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // Parse and set the user data
    }
  }, []);

  const userName = user?.name?.split(' ')[0] || 'Guest'; // Safely access name
  const userRole = user?.role || 'user'; // Fallback to 'user' if role is undefined
  return (
    <div className="w-screen bg-gradient-to-tr from-10% from-sky-300 to-blue-600 relative overflow-hidden flex flex-col">
      {/* Header */}
      <Wheader name={userName} />

      {/* Sidebar */}
      <div className="flex">
        <Sidebar role={userRole} />

        {/* Main content area with nested routes */}
        <div className="flex flex-col w-full">
          <Navigation />
          {/* The Outlet renders the child routes dynamically here */}
          <Outlet />
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Layout;
