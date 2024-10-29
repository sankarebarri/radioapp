// src/components/ChannelInfo.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic, faWaveSquare } from "@fortawesome/free-solid-svg-icons";
import "../styles/ChannelInfo.css";

const ChannelInfo = ({ description, genre, frequency }) => {
  return (
    <div className="channel-info">
      <h2>About This Channel</h2>
      <p className="description">{description}</p>
      <div className="info-details">
        <div className="info-item">
          <FontAwesomeIcon icon={faMusic} /> <strong>Genre:</strong> {genre}
        </div>
        <div className="info-item">
          <FontAwesomeIcon icon={faWaveSquare} /> <strong>Frequency:</strong>{" "}
          {frequency}
        </div>
      </div>
    </div>
  );
};

export default ChannelInfo;
