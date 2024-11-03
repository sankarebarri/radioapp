// src/components/Header.js
import React, { useState, useEffect } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUser,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons"; // Import Font Awesome icons
import "../styles/Header.css";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Get the current location for active link styling
  const { isAuthenticated, logout } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown visibility

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev); // Toggle dropdown state
  };

  const handleLogout = () => {
    logout(); // Call the logout function from AuthContext
    navigate("/"); // Redirect to home after logout
    setIsDropdownOpen(false); // Close dropdown on logout
  };

  // Close dropdown when navigating
  const handleNavigation = () => {
    setIsDropdownOpen(false); // Close dropdown when a link is clicked
  };

  // Placeholder for user image URL
  const userImageUrl = "https://via.placeholder.com/40"; // Replace with actual user image URL

  useEffect(() => {
    const handleClickOutside = (event) => {
      const dropdown = document.querySelector(".profile-dropdown");
      if (dropdown && !dropdown.contains(event.target)) {
        setIsDropdownOpen(false); // Close dropdown if clicked outside
      }
    };

    // Attach event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Clean up the event listener
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
          <div className="profile-dropdown">
            <img
              src={userImageUrl}
              alt="User"
              className="profile-image"
              onClick={toggleDropdown} // Toggle dropdown on image click
              style={{ cursor: "pointer" }} // Change cursor to pointer for better UX
            />
            {isDropdownOpen && ( // Render dropdown menu when isDropdownOpen is true
              <div className="dropdown-menu">
                <Link
                  to="/user-authenticated-home-page"
                  className="dropdown-item"
                  onClick={handleNavigation}
                  style={{
                    backgroundColor:
                      location.pathname === "/user-authenticated-home-page"
                        ? "#e9ecef"
                        : "transparent",
                  }}
                >
                  <FontAwesomeIcon icon={faHouse} /> Dashboard
                </Link>
                <Link
                  to="/profile"
                  className="dropdown-item"
                  onClick={handleNavigation}
                  style={{
                    backgroundColor:
                      location.pathname === "/profile"
                        ? "#e9ecef"
                        : "transparent",
                  }}
                >
                  <FontAwesomeIcon icon={faUser} /> Profile
                </Link>
                <button className="btn logout" onClick={handleLogout}>
                  <FontAwesomeIcon icon={faSignOutAlt} /> Logout
                </button>
              </div>
            )}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
