import { createContext, useState, useContext, ReactNode } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import { getCookie } from './getCookie';

interface AuthContextProps {
  isAuthenticated: boolean;
  accessToken: string | null;
  refreshToken: string | null;
  login: () => void;
  logout: () => void;
  checkAuth: () => void;
}

const AuthContext = createContext<AuthContextProps>({
  isAuthenticated: false,
  accessToken: null,
  refreshToken: null,
  login: () => {},
  logout: () => {},
  checkAuth: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [refreshToken, setRefreshToken] = useState<string | null>(null);
  const navigate = useNavigate();

  const login = async () => {
    // console.log("login function triggered !");
    window.location.href = 'https://api.nilcloud.net/auth/login';
    // return true;
  };

  const logout = () => {
    setIsAuthenticated(false);
    console.log("logout triggered, Authenticated ?", isAuthenticated);
    setAccessToken(null);
    setRefreshToken(null);
    navigate('/login');
  };
 
  const checkAuth = async () => {
    try {
      // console.log("checkAuth function triggered !");
      // const csrfToken = getCookie('accessToken');
      const response = await axios.get('https://api.nilcloud.net/auth/check-auth', { 
      withCredentials: true,
    });
      // console.log("Response from checkAuth:", response);
      if (response.data.isAuthenticated) {
        // console.log("checkAuth, Authenticated ?", isAuthenticated);
        setIsAuthenticated(true);
        setAccessToken(response.data.accessToken);
        setRefreshToken(response.data.refreshToken);
      }
    } catch (error) {
      setIsAuthenticated(false);
      // console.log("error, Authenticated ?", isAuthenticated);
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, accessToken, refreshToken, login, logout, checkAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
