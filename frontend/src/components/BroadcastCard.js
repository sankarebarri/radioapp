// src/components/BroadcastCard.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faDownload,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/BroadcastCard.css"; // Import the CSS for styling

const BroadcastCard = ({ broadcast, onListen }) => {
  const {
    title,
    description,
    channel_name,
    timestamp,
    hasBeenPlayed,
    isDownloaded,
  } = broadcast;

  return (
    <div
      className={`broadcast-card ${
        hasBeenPlayed ? "listened" : "not-listened"
      }`}
    >
      <h3 className="broadcast-title">{title}</h3>
      <p className="broadcast-description">{description}</p>
      <div className="broadcast-meta">
        <small className="broadcast-channel">Channel: {channel_name}</small>
        <small className="broadcast-timestamp">
          {new Date(timestamp).toLocaleString()}
        </small>
      </div>
      <div className="broadcast-actions">
        <button onClick={() => onListen(broadcast.id)}>
          <FontAwesomeIcon icon={faPlay} /> Listen Now
        </button>
        {!isDownloaded ? (
          <button className="download-button">
            <FontAwesomeIcon icon={faDownload} /> Download
          </button>
        ) : (
          <FontAwesomeIcon icon={faCheckCircle} className="downloaded-icon" />
        )}
      </div>
    </div>
  );
};

export default BroadcastCard;
