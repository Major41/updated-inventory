import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Bhome from '../../../Components/BHOME/Bhome';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user'); // Default role
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Validate email for staff role
    if (role === 'admin') {
      const domain = email.split('@')[1];
      if (domain !== 'university.edu') {
        toast.error(
          'You can only register as staff with a valid university email address.'
        );
        setLoading(false);
        return;
      }
    }

    try {
      const response = await axios.post(
        'http://localhost:5000/api/users/register',
        { name, email, password, role }
      );

      // Save token to local storage
      localStorage.setItem('token', response.data.token);

      toast.success('Registration successful!');

      // Redirect to dashboard or login page
      navigate('/login'); // Change this based on your flow
    } catch (err) {
      toast.error(err.response?.data?.message || 'Registration failed');
      console.log(err);
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="h-screen w-screen text-black">
      <Bhome />
      <div className="h-full rounded-2xl flex items-center justify-center bg-gray-100 px-4">
        <ToastContainer />
        <div className="bg-gray-100 border-2 flex flex-col items-center justify-center p-8 rounded-xl shadow-md w-[500px]">
          <h2 className="text-3xl font-bold text-center text-gray-800">
            Register
          </h2>
          <p className="text-sm text-gray-500 text-center mt-2">
            Create your account to get started
          </p>
          <form
            onSubmit={handleSubmit}
            className="mt-6 flex flex-col items-center justify-center space-y-4 "
          >
            <div className="w-[400px]">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="w-[400px]">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="w-[400px]">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="w-[400px]">
              <label
                htmlFor="role"
                className="block text-sm font-medium text-gray-700"
              >
                Role
              </label>
              <select
                id="role"
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
              >
                <option value="user">Student</option>
                <option value="admin">Staff</option>
              </select>
            </div>
            <button
              type="submit"
              className={`w-full p-3 text-white font-medium rounded-lg ${
                loading
                  ? 'bg-blue-300 cursor-not-allowed'
                  : 'bg-blue-500 hover:bg-blue-600'
              }`}
              disabled={loading}
            >
              {loading ? 'Registering...' : 'Register'}
            </button>
          </form>
          <div className="text-center mt-4">
            <a
              href="/forgotpassword"
              className="text-blue-500 hover:underline text-sm"
            >
              Forgot Password?
            </a>
          </div>
          <div className="text-center mt-4 text-gray-500 text-sm">
            Already have an account?{' '}
            <a href="/login" className="text-blue-500 hover:underline">
              Login here
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
