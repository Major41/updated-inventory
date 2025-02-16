import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../AuthContext/AuthContext';

const Wheader = () => {
  const { user, logout } = useAuth(); 
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleLogout = async () => {
    try {
      await logout(); // Call logout function
      navigate('/login'); // Redirect to login
    } catch (error) {
      console.error(
        'Logout failed:',
        error.response?.data?.message || error.message
      );
      alert('Error logging out. Please try again.');
    }
  };

  return (
    <div className="bg-blue-900 w-full flex justify-between items-center px-10 py-1.5 overflow-hidden relative z-10">
      <h2 className="font-bold text-2xl ml-10 md:ml-0 text-white">ROBO LAB</h2>
      <div className="relative flex justify-center items-center gap-3">
        <p className="text-white">Hi, {user?.name.split(' ')[0] || 'Guest'}</p>
        {/* User Icon */}
        <FaUser
          onClick={toggleDropdown}
          className="w-[40px] h-[40px] p-2 rounded-full bg-white text-gray-400 cursor-pointer"
        />

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div className="fixed right-0 mt-[100px] bg-white shadow-lg text-black rounded-md w-40 z-50">
            <ul className="py-2">
              <li
                onClick={handleLogout}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-500"
              >
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wheader;
