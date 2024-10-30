// src/components/Header.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  React.useEffect(() => {
    const token = localStorage.getItem("access_token");
    setIsAuthenticated(!!token); // Set true if token exists, false otherwise
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");

    setIsAuthenticated(false);
    navigate("/");
  };

  return (
    <header className="header">
      <div className="logo" onClick={() => navigate("/")}>
        RadioApp
      </div>
      <nav>
        <button onClick={() => navigate("/browse")}>Browse Channels</button>
        <button onClick={() => navigate("/about")}>About</button>
        <button onClick={() => navigate("/contact")}>Contact</button>
        {!isAuthenticated ? (
          <>
            <button className="btn primary" onClick={() => navigate("/login")}>
              Login
            </button>
            <button
              className="btn secondary"
              onClick={() => navigate("/register")}
            >
              Register
            </button>
          </>
        ) : (
          <button className="btn primary" onClick={handleLogout}>
            Logout
          </button>
        )}
      </nav>
    </header>
  );
};

export default Header;
