import React, { useState } from 'react';
import axios from 'axios';
import Bhome from '../../../Components/BHOME/Bhome';
import API from '../../../API/Api';
const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    setError('');

    try {
      const response = await API.post(
        '/api/users/forgotpassword',
        { email }
      );
      setMessage(response.data.message || 'Reset link sent to your email.');
    } catch (err) {
      setError(
        err.response?.data?.message || 'An error occurred. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" h-screen w-screen text-black">
      <Bhome />
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-300 to-blue-800">
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-lg">
          <h2 className="text-2xl font-bold text-center text-gray-700">
            Forgot Password
          </h2>
          <form onSubmit={handleForgotPassword} className="space-y-4">
            <div className="w-[400px]">
              <label htmlFor="email" className="block text-sm text-gray-600">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 mt-1 border rounded focus:outline-none focus:ring focus:ring-green-300"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            {message && <p className="text-sm text-green-600">{message}</p>}
            {error && <p className="text-sm text-red-600">{error}</p>}
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Reset Link'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
