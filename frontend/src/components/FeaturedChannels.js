// src/components/FeaturedChannels.js
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBroadcastTower,
  faMusic,
  faHeadphones,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/FeaturedChannels.css";

const FeaturedChannels = ({ channels }) => {
  return (
    <div className="featured-channels">
      <h3>Featured Channels</h3>
      <div className="channels-list">
        {channels.map((channel) => (
          <Link
            to={`/channel/${channel.id}`}
            key={channel.id}
            className="channel-card-link"
          >
            <div className="channel-card">
              <div className="channel-header">
                <img
                  src={channel.logo}
                  alt={`${channel.name} logo`}
                  className="channel-logo"
                />
                <h4 className="channel-name">{channel.name}</h4>
              </div>
              <div className="channel-content">
                <div className="channel-info">
                  <div className="info-row">
                    <div className="info-item">
                      <FontAwesomeIcon icon={faBroadcastTower} />{" "}
                      {channel.frequency}
                    </div>
                    <div className="info-item">
                      <FontAwesomeIcon icon={faMusic} /> {channel.genre}
                    </div>
                  </div>
                  <div className="info-row">
                    <div className="info-item">
                      <FontAwesomeIcon icon={faGlobe} /> {channel.country},{" "}
                      {channel.state}
                    </div>
                  </div>
                </div>
                <button className="btn listen-now">
                  <FontAwesomeIcon icon={faHeadphones} /> Listen Now
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FeaturedChannels;
