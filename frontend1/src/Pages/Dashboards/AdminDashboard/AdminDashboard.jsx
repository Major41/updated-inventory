import React, { useEffect, useState } from 'react';
import {Outlet } from 'react-router-dom';
import Wheader from '../../../Components/Wheader/Wheader';
import Sidebar from '../../../Components/SideBar/SideBar';
import Footer from '../../../Components/Footer/Footer';

const UserDashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // Parse and set the user data
    }
  }, []);

   return (
    <div className="w-screen bg-gradient-to-tr from-10% from-sky-300 to-blue-600 relative overflow-hidden flex flex-col">
      {/* Header */}
      <Wheader/>

      {/* Sidebar */}
      <div className="flex">
        <Sidebar/>

        {/* Main content area with nested routes */}
        <div className="flex flex-col w-full">
          {/* The Outlet renders the child routes dynamically here */}
          <Outlet />
        </div>
      </div>
    <Footer/>
    </div>
  );
};

export default UserDashboard;
