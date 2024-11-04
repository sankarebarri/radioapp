// src/components/BroadcastCard.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faDownload,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/BroadcastCard.css";

const BroadcastCard = ({ broadcast, onListen }) => {
  const { title, description, channel_name, timestamp, user_interactions } =
    broadcast;

  const downloaded = user_interactions?.downloaded || false; // Default to false if undefined
  const is_listened_to = user_interactions?.is_listened_to || false; // Default to false if undefined

  return (
    <div
      className={`broadcast-card ${
        is_listened_to ? "listened" : "not-listened"
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
          <FontAwesomeIcon icon={faPlay} />{" "}
          {is_listened_to ? "Listen Again" : "Listen Now"}
        </button>
        {!downloaded ? (
          <button className="download-button">
            <FontAwesomeIcon icon={faDownload} /> Download
          </button>
        ) : (
          <FontAwesomeIcon
            icon={faCheckCircle}
            className="downloaded-icon"
            style={{ fontSize: "2.5rem" }}
          />
        )}
      </div>
    </div>
  );
};

export default BroadcastCard;
