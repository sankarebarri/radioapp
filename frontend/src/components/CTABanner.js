// src/components/CTABanner.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/CTABanner.css";

const CTABanner = () => {
  const navigate = useNavigate();

  return (
    <section className="cta-banner">
      <h2>Ready to Explore Real Voices Worldwide?</h2>
      <button className="btn primary" onClick={() => navigate("/register")}>
        Join Now
      </button>
    </section>
  );
};

export default CTABanner;
