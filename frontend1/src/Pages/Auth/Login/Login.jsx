import { useState } from 'react';
import { useAuth } from '../../../AuthContext/AuthContext'; 
import { useNavigate } from 'react-router-dom';
import Bhome from '../../../Components/BHOME/Bhome';

const Login = () => {
  const { login } = useAuth()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
    
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="h-screen w-screen ">
      <Bhome />
      <div className="min-h-screen w-full flex justify-center items-center bg-gray-100">
        <div className="bg-white border-2 p-6 rounded-lg shadow-lg w-80">
          <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 cursor-pointer rounded hover:bg-blue-600"
            >
              Login
            </button>
          </form>
          
        </div>
      </div>
    </div>
  );
};

export default Login;
