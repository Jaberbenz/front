import { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './authContext';

const RouteGuard = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated, checkAuth } = useAuth();
  const location = useLocation();

  useEffect(() => {
    checkAuth();
  }, []);

  if (!isAuthenticated) {
    console.log("RouteGuard Triggered, Authenticated ? ", isAuthenticated);
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default RouteGuard;
