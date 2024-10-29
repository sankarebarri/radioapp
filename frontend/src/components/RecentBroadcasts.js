// src/components/RecentBroadcasts.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import "../styles/RecentBroadcasts.css";

const RecentBroadcasts = ({ broadcasts }) => {
  return (
    <div className="recent-broadcasts">
      <h2>Recent Broadcasts</h2>
      <ul>
        {broadcasts.map((broadcast) => (
          <li key={broadcast.id} className="broadcast-item">
            <h4 className="broadcast-title">{broadcast.title}</h4>
            <p className="broadcast-description">{broadcast.description}</p>
            <small className="broadcast-timestamp">{broadcast.timestamp}</small>
            <button className="btn play-btn">
              <FontAwesomeIcon icon={faPlayCircle} /> Play
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentBroadcasts;
