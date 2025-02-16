import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaUser, FaEnvelope, FaPhone, FaEdit, FaTimes } from 'react-icons/fa';
import { useAuth } from '../../AuthContext/AuthContext';
import API from '../../API/Api';
const AccountDetails = () => {
  const { user } = useAuth();
  const [userDetails, setUserDetails] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [updatedDetails, setUpdatedDetails] = useState({});

  // ✅ Set updated details only when user changes
  useEffect(() => {
    if (user) {
      setUserDetails(user);
      setUpdatedDetails(user);
    }
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.patch('/api/users/updateuser', updatedDetails);

      setIsEditing(false);
      setUserDetails((prev) => ({ ...prev, ...updatedDetails }));
    } catch (error) {
      console.error('Error updating details:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Account Details</h1>
      {userDetails ? (
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-2xl flex flex-col md:flex-row items-center">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-500 mb-4 md:mb-0 md:mr-6">
            <img
              src={userDetails.photo || 'https://via.placeholder.com/150'}
              alt="User"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 space-y-4">
            <div className="flex items-center gap-3">
              <FaUser className="text-blue-500" />
              <span className="text-lg font-semibold">{userDetails.name}</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-blue-500" />
              <span className="text-lg">{userDetails.email}</span>
            </div>
            <div className="flex items-center gap-3">
              <FaPhone className="text-blue-500" />
              <span className="text-lg">
                {userDetails.phone || 'Not provided'}
              </span>
            </div>
            <button
              onClick={() => setIsEditing(true)}
              className="bg-blue-600 text-white flex items-center gap-2 py-2 px-4 rounded hover:bg-blue-900 cursor-pointer"
            >
              <FaEdit /> Edit Details
            </button>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}

      {isEditing && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg relative">
            <button
              onClick={() => setIsEditing(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
            >
              <FaTimes />
            </button>
            <h2 className="text-xl font-bold text-gray-700 mb-4">
              Update Details
            </h2>
            <form onSubmit={handleUpdateSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium">Name:</label>
                <input
                  type="text"
                  name="name"
                  value={updatedDetails.name || ''}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  autoFocus
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">
                  Email:
                </label>
                <input
                  type="email"
                  name="email"
                  value={updatedDetails.email || ''}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">
                  Phone:
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={updatedDetails.phone || ''}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <button
                type="submit"
                className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 cursor-pointer"
              >
                Save Changes
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccountDetails;
