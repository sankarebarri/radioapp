// src/components/ChannelHeader.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBroadcastTower, faEdit } from "@fortawesome/free-solid-svg-icons";
import "../styles/ChannelHeader.css";

const ChannelHeader = ({
  channel,
  isOwner,
  isAuthenticated,
  onFollowToggle,
}) => {
  return (
    <div className="channel-header">
      <img
        src={channel.logo}
        alt={`${channel.name} logo`}
        className="channel-logo"
      />
      <h1 className="channel-name">
        <FontAwesomeIcon icon={faBroadcastTower} /> {channel.name}
      </h1>

      {!isOwner && isAuthenticated && (
        <button className="btn follow-btn" onClick={onFollowToggle}>
          {channel.isFollowing ? "Unfollow" : "Follow"}
        </button>
      )}

      {isOwner && (
        <button className="btn edit-btn">
          <FontAwesomeIcon icon={faEdit} /> Edit Channel
        </button>
      )}
    </div>
  );
};

export default ChannelHeader;
