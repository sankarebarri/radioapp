// src/components/Features.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faHeadphones,
  faCloudDownloadAlt,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/Features.css";

const Features = () => {
  return (
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
  );
};

export default Features;
