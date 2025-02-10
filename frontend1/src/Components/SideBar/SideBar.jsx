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
import { useAuth } from '../../AuthContext/AuthContext';

const Sidebar = () => {
  const { user } = useAuth();
  const [isExpanded, setIsExpanded] = useState(false);

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
    <div
      className={`${
        isExpanded ? 'w-52' : 'w-16'
      } min-h-screen bg-blue-800 text-white flex flex-col transition-all duration-300 overflow-hidden`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <ul className="flex-grow mt-4 space-y-2 px-2">
        {menu.map((item, index) => (
          <li
            key={index}
            className="p-3 rounded-md hover:bg-blue-700 cursor-pointer"
          >
            <NavLink
              to={item.route}
              className="flex items-center w-full"
              activeClassName="bg-blue-700 text-white"
            >
              <span className="text-lg">{item.icon}</span>
              {isExpanded && (
                <span className="text-md ml-2 font-medium">{item.label}</span>
              )}
            </NavLink>
          </li>
        ))}
      </ul>

      <div className="p-4 text-center text-sm border-t border-blue-700">
        © {new Date().getFullYear()} ROBO LAB
      </div>
    </div>
  );
};

export default Sidebar;
