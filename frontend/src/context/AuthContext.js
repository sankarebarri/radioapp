import React from "react";
import {
  getAccessToken,
  setAccessToken,
  removeAccessToken,
  getRefreshToken,
  setRefreshToken,
  removeRefreshToken,
} from "../utils/token";

const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(
    !!getAccessToken() && !!getRefreshToken() // Check both tokens
  );

  const login = (accessToken, refreshToken) => {
    setAccessToken(accessToken);
    setRefreshToken(refreshToken);
    setIsAuthenticated(true);
  };

  const logout = () => {
    removeAccessToken();
    removeRefreshToken();
    setIsAuthenticated(false);
  };

  React.useEffect(() => {
    // Update authentication state on initialization or if tokens change
    setIsAuthenticated(!!getAccessToken() && !!getRefreshToken());
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);
