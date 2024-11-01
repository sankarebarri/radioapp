// src/components/FollowedChannelsSidebar.js
import React from "react";

const FollowedChannelsSidebar = ({
  channels,
  onChannelSelect,
  selectedChannelId,
}) => {
  return (
    <div className="sidebar">
      <h3>Followed Channels</h3>
      <button onClick={() => onChannelSelect(null)}>All Channels</button>{" "}
      {/* Reset filter button */}
      {channels.map((channel) => (
        <div
          key={channel.id}
          onClick={() => onChannelSelect(channel.id)}
          className={`sidebar-item ${
            selectedChannelId === channel.id ? "active" : ""
          }`}
        >
          <img
            src={channel.logo_url}
            alt={channel.name}
            className="channel-logo"
          />
          <div className="channel-info">
            <h4>{channel.name}</h4>
            <p>
              {channel.country} - {channel.frequency}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FollowedChannelsSidebar;
