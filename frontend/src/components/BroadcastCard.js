// src/components/BroadcastCard.js
import React from "react";

const BroadcastCard = ({ broadcast }) => {
  return (
    <div className="broadcast-card">
      <h3>{broadcast.title}</h3>
      <p className="channel-identifier">
        {broadcast.channel_name} ({broadcast.country}) - {broadcast.frequency}
      </p>
      <p>{broadcast.description}</p>
      <small>{new Date(broadcast.timestamp).toLocaleString()}</small>
      <div className="broadcast-actions">
        <button className="btn btn-primary">Play</button>
        <button className="btn btn-secondary">Download</button>
      </div>
    </div>
  );
};

export default BroadcastCard;
