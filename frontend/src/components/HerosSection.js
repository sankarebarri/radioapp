// src/components/HeroSection.js
import React from "react";

const HeroSection = ({ channel }) => (
  <div className="hero-section">
    <img
      src={channel.logo}
      alt={`${channel.name} logo`}
      className="channel-logo"
    />
    <div className="channel-info">
      <h1>{channel.name}</h1>
      <p className="channel-details">
        <strong>Genre:</strong> {channel.genre} | <strong>Country:</strong>{" "}
        {channel.country} | <strong>Frequency:</strong> {channel.frequency}
      </p>
      <p>
        <strong>Followers:</strong> {channel.followers.toLocaleString()}
      </p>
      <p className="channel-description">{channel.description}</p>
    </div>
  </div>
);

export default HeroSection;
