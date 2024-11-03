// src/components/ChannelCard.js
import React from "react";
import "../styles/ChannelCard.css"; // Import the CSS for styling

const ChannelCard = ({ channel }) => {
  return (
    <div className="channel-card">
      <img
        src={channel.channel.logo_url}
        alt={`${channel.channel.name} logo`}
        className="channel-logo"
      />
      <div className="channel-info">
        <h3 className="channel-name">{channel.channel.name}</h3>
        <div className="channel-details">
          <span className="channel-country">{channel.channel.country}</span>
          <span className="channel-frequency">{channel.channel.frequency}</span>
        </div>
      </div>
    </div>
  );
};

export default ChannelCard;
