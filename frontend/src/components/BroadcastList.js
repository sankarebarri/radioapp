// src/components/BroadcastList.js
import React from "react";
import BroadcastCard from "./BroadcastCard";

const BroadcastList = ({ broadcasts, title, navigate }) => (
  <div className="broadcast-list">
    <h3>{title}</h3>
    <div className="broadcast-carousel">
      {broadcasts.map((broadcast) => (
        <BroadcastCard
          key={broadcast.id}
          broadcast={broadcast}
          navigate={navigate}
        />
      ))}
    </div>
  </div>
);

export default BroadcastList;
