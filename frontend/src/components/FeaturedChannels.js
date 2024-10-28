// src/components/FeaturedChannels.js
import React from "react";
import "../styles/FeaturedChannels.css";

const FeaturedChannels = ({ channels }) => {
  return (
    <div className="featured-channels">
      <h3>Featured Channels</h3>
      <div className="channels-list">
        {channels.map((channel) => (
          <div key={channel.id} className="channel-card">
            <h4>{channel.name}</h4>
            <p>
              {channel.genre} - {channel.country}
            </p>
            <button className="btn listen-now">Listen Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedChannels;
