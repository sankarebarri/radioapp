// src/components/BroadcastCard.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faDownload } from "@fortawesome/free-solid-svg-icons";

const BroadcastCard = ({ broadcast, navigate }) => (
  <div className="broadcast-card">
    <h5>{broadcast.title}</h5>
    <p>{broadcast.description}</p>
    <small>{broadcast.timestamp || broadcast.time}</small>
    <div className="mt-2">
      {navigate && (
        <button
          className="btn btn-sm btn-primary me-2"
          onClick={() => navigate(`/play/${broadcast.id}`)}
        >
          <FontAwesomeIcon icon={faPlay} /> Listen Now
        </button>
      )}
      <button className="btn btn-sm btn-outline-secondary">
        <FontAwesomeIcon icon={faDownload} /> Download
      </button>
    </div>
  </div>
);

export default BroadcastCard;
