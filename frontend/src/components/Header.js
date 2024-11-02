// src/components/Header.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import "../styles/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  const navigate = useNavigate();
  // const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  // React.useEffect(() => {
  //   const token = localStorage.getItem("access");
  //   setIsAuthenticated(!!token); // Set true if token exists, false otherwise
  // }, []);

  // const handleLogout = () => {
  //   localStorage.removeItem("access");
  //   localStorage.removeItem("refresh");

  //   setIsAuthenticated(false);
  //   navigate("/");
  // };
  const { isAuthenticated, logout } = useAuth();
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
          <div>
            <FontAwesomeIcon icon="fa-solid fa-user" />
            <button className="btn primary" onClick={logout}>
              Logout
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
