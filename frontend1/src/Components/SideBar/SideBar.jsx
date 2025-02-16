import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaHome,
  FaFlask,
  FaSearch,
  FaUsers,
  FaUser,
  FaBook,
  FaCheck,
} from 'react-icons/fa';
import { FiMenu, FiX } from 'react-icons/fi';
import { useAuth } from '../../AuthContext/AuthContext';

const Sidebar = () => {
  const { user } = useAuth();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const userMenu = [
    { label: 'Dashboard', icon: <FaHome />, route: '/student' },
    { label: 'Explore Labs', icon: <FaFlask />, route: '/student/labs' },
    { label: 'Search Item', icon: <FaSearch />, route: '/student/search' },
    { label: 'Borrowed Items', icon: <FaBook />, route: '/student/borrowed' },
    { label: 'Profile', icon: <FaUser />, route: '/student/profile' },
  ];

  const adminMenu = [
    { label: 'Dashboard', icon: <FaHome />, route: '/staff' },
    { label: 'Labs', icon: <FaFlask />, route: '/staff/labs' },
    { label: 'Items', icon: <FaCheck />, route: '/staff/items' },
    { label: 'Borrowed', icon: <FaBook />, route: '/staff/borrowed' },
    { label: 'Students', icon: <FaUsers />, route: '/staff/students' },
    { label: 'Profile', icon: <FaUser />, route: '/staff/profile' },
  ];

  const menu = user?.role === 'admin' ? adminMenu : userMenu;

  return (
    <div className="text-black">
      {/* Menu Button for Small Screens */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden fixed top-2 left-4 z-20 bg-blue-900 text-white p-2 rounded-md"
      >
        {isMenuOpen ? (
          <FiX className="text-2xl cursor-pointer" />
        ) : (
          <FiMenu className="text-2xl cursor-pointer" />
        )}
      </button>

      {/* Sidebar */}
      <div
        className={`bg-blue-900 text-black flex flex-col transition-all duration-300 overflow-hidden
        ${isMenuOpen ? 'fixed w-52 h-full left-0' : 'fixed w-0 left-[-100%]'} 
        md:static md:w-20 md:h-full md:hover:w-52`}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        <ul className="flex-grow mt-4 space-y-2 px-2">
          {menu.map((item, index) => (
            <li
              key={index}
              className="p-3 rounded-md hover:bg-blue-800 cursor-pointer"
            >
              <NavLink
                to={item.route}
                className="flex items-center bg-white text-black py-3 px-2 rounded-md"
                activeClassName="bg-blue-900 text-white"
                onClick={() => setIsMenuOpen(false)} // Close sidebar on link click
              >
                <span className="text-lg">{item.icon}</span>
                {/* Show labels when menu is open on small screens or expanded on large screens */}
                {(isMenuOpen || isExpanded) && (
                  <span className="text-md ml-2 text-black font-medium">
                    {item.label}
                  </span>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
