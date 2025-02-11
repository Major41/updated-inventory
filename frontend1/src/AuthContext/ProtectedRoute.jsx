import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './AuthContext'

const PrivateRoute = ({ role }) => {
  const { user, loading } = useAuth();

   
  if (loading) {
    return <div>Protected Loading...</div>; // You can add a loader here if needed
  }

  if (!user) {
    return <Navigate to="/login" />; // Redirect to login if no user
  }

  // If user is logged in, check the role (optional)
  if (role && user.role !== role) {
    return <Navigate to="/" />; // Redirect to homepage if role doesn't match
  }

  return <Outlet />; // Allow access to child routes if user is authenticated
};

export default PrivateRoute; // Export the component for use elsewhere
