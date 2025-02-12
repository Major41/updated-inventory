import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import API from '../../../API/Api';
const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await API.get(
        '/api/users/logout',

        {
          withCredentials: true, // Ensure cookies are sent with the request
        }
      );
      // alert('Successfully logged out!');
      Cookies.remove('token')
      navigate('/login'); // Redirect the user to the login page
    } catch (error) {
      console.error(
        'Logout failed:',
        error.response?.data?.message || error.message
      );
      alert('Error logging out. Please try again.');
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 text-white py-2 px-4 rounded"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
