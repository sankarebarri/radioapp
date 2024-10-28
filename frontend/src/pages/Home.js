// src/pages/Home.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBroadcastTower,
  faGlobe,
  faHeadphones,
  faCloudDownloadAlt,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      {/* Header */}
      <header className="header">
        <div className="logo" onClick={() => navigate("/")}>
          RadioApp
        </div>
        <nav>
          <button onClick={() => navigate("/channels")}>Browse Channels</button>
          <button onClick={() => navigate("/about")}>About</button>
          <button onClick={() => navigate("/contact")}>Contact</button>
          <button className="btn primary" onClick={() => navigate("/login")}>
            Login
          </button>
          <button
            className="btn secondary"
            onClick={() => navigate("/register")}
          >
            Register
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h1>Hear Authentic Voices from Remote Corners of the World</h1>
        <p>
          Connect to original broadcasts, unfiltered perspectives, and stories
          from real people everywhere.
        </p>
        <button className="btn primary" onClick={() => navigate("/channels")}>
          Browse Channels
        </button>
      </section>

      {/* Why Choose Us Section */}
      <section className="features">
        <h2>Why Choose RadioApp</h2>
        <div className="feature-grid">
          <div className="feature">
            <FontAwesomeIcon icon={faGlobe} size="2x" />
            <h3>Global Access</h3>
            <p>
              Listen to voices from over 100 countries, live from their source.
            </p>
          </div>
          <div className="feature">
            <FontAwesomeIcon icon={faHeadphones} size="2x" />
            <h3>Unique Genres</h3>
            <p>Discover channels for music, news, sports, and more.</p>
          </div>
          <div className="feature">
            <FontAwesomeIcon icon={faCloudDownloadAlt} size="2x" />
            <h3>Offline Listening</h3>
            <p>Download broadcasts and listen offline at any time.</p>
          </div>
          <div className="feature">
            <FontAwesomeIcon icon={faUserFriends} size="2x" />
            <h3>Community & Connection</h3>
            <p>Follow channels and interact with global listeners.</p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Banner */}
      <section className="cta-banner">
        <h2>Ready to Explore Real Voices Worldwide?</h2>
        <button className="btn primary" onClick={() => navigate("/register")}>
          Join Now
        </button>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-links">
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/terms">Terms of Service</a>
          <a href="/privacy">Privacy Policy</a>
        </div>
        <p>© 2024 RadioApp. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
