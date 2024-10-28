// src/components/ChannelsGrid.js
import React from "react";
import "../styles/ChannelsGrid.css";

const ChannelsGrid = ({ channels }) => {
  return (
    <div className="channels-grid">
      {channels.map((channel) => (
        <div key={channel.id} className="channel-card">
          <h4>{channel.name}</h4>
          <p>
            {channel.genre} - {channel.country}
          </p>
          <p>{channel.description}</p>
          <button className="btn listen-now">Listen Now</button>
        </div>
      ))}
    </div>
  );
};

export default ChannelsGrid;
