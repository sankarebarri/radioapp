// src/components/Header.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="logo" onClick={() => navigate("/")}>
        RadioApp
      </div>
      <nav>
        <button onClick={() => navigate("/browse")}>Browse Channels</button>
        <button onClick={() => navigate("/about")}>About</button>
        <button onClick={() => navigate("/contact")}>Contact</button>
        <button className="btn primary" onClick={() => navigate("/login")}>
          Login
        </button>
        <button className="btn secondary" onClick={() => navigate("/register")}>
          Register
        </button>
      </nav>
    </header>
  );
};

export default Header;
