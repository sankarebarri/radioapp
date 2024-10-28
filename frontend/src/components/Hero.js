// src/components/Hero.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Hero.css";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <h1>Hear Authentic Voices from Remote Corners of the World</h1>
      <p>
        Connect to original broadcasts, unfiltered perspectives, and stories
        from real people everywhere.
      </p>
      <button className="btn primary" onClick={() => navigate("/browse")}>
        Browse Channels
      </button>
    </section>
  );
};

export default Hero;
