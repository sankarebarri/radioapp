// src/components/BroadcastInfo.js
import React from "react";

const BroadcastInfo = ({ title, channel, description }) => (
  <div className="broadcast-info">
    <h2>{title}</h2>
    <p>Channel: {channel}</p>
    <p className="broadcast-description">{description}</p>
  </div>
);

export default BroadcastInfo;
