// src/pages/ChannelPage.js
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faDownload,
  faHeart,
  faShare,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/ChannelPage.css";
import api from "../services/api"; // Importing the API

const ChannelPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [channel, setChannel] = useState(null);
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);
  const [followers, setFollowers] = useState(0);
  const [error, setError] = useState(null);

  // Placeholder login status
  const isLoggedIn = false;

  useEffect(() => {
    const fetchChannelData = async () => {
      try {
        const response = await api.get(`/channels/channels/${id}/`); // Fetch channel data from the API
        setChannel(response.data);
        setFollowers(response.data.followers); // Assuming your API returns followers
      } catch (err) {
        console.error("Error fetching channel data:", err);
        setError("Failed to load channel data.");
      }
    };

    fetchChannelData();
  }, [id]);

  const handleFollowClick = async () => {
    if (!isLoggedIn) {
      setShowLoginPrompt(true);
      setTimeout(() => setShowLoginPrompt(false), 3000);
    } else {
      try {
        if (channel.isFollowing) {
          // Unfollow API call
          await api.post(`/channels/${id}/unfollow/`); // Adjust endpoint
          setFollowers((prevFollowers) => prevFollowers - 1);
        } else {
          // Follow API call
          await api.post(`/channels/${id}/follow/`); // Adjust endpoint
          setFollowers((prevFollowers) => prevFollowers + 1);
        }
        setChannel((prevChannel) => ({
          ...prevChannel,
          isFollowing: !prevChannel.isFollowing,
        }));
      } catch (err) {
        console.error("Error updating follow status:", err);
        setError("Failed to update follow status.");
      }
    }
  };

  if (error) return <p>{error}</p>; // Error handling

  if (!channel) return <p>Loading...</p>;

  return (
    <div>
      <div className="channel-page">
        {/* Hero Section */}
        <div className="hero-section">
          <img
            src={channel.logo}
            alt={`${channel.name} logo`}
            className="channel-logo"
          />
          <div className="channel-info">
            <h1>{channel.name}</h1>
            <p className="channel-details">
              <strong>Genre:</strong> {channel.genre} |{" "}
              <strong>Country:</strong> {channel.country} |{" "}
              <strong>Frequency:</strong> {channel.frequency}
            </p>
            <p className="followers">
              <strong>Listeners:</strong> {followers.toLocaleString()}
            </p>
            <p className="channel-description">{channel.description}</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="action-buttons">
          <button className="btn btn-primary me-2">
            <FontAwesomeIcon icon={faPlay} /> Listen Now
          </button>
          <button
            className="btn btn-outline-secondary me-2"
            onClick={handleFollowClick}
          >
            <FontAwesomeIcon icon={faHeart} />{" "}
            {channel.isFollowing ? "Unfollow" : "Follow"}
          </button>
          <button className="btn btn-outline-secondary">
            <FontAwesomeIcon icon={faShare} /> Share
          </button>
        </div>

        {showLoginPrompt && (
          <p className="login-prompt text-danger">
            Please log in to follow channels.
          </p>
        )}

        {/* Recent Broadcasts */}
        <div className="recent-broadcasts mb-5">
          <h3>Recent Broadcasts</h3>
          <div className="broadcast-carousel">
            {channel.recentBroadcasts.map((broadcast) => (
              <div key={broadcast.id} className="broadcast-card">
                <h5>{broadcast.title}</h5>
                <p>{broadcast.description}</p>
                <small>{broadcast.timestamp}</small>
                <div className="mt-2">
                  <button
                    className="btn btn-sm btn-primary me-2"
                    onClick={() => navigate(`/play/${broadcast.id}`)}
                  >
                    <FontAwesomeIcon icon={faPlay} /> Play
                  </button>
                  <button className="btn btn-sm btn-outline-secondary">
                    <FontAwesomeIcon icon={faDownload} /> Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Schedule */}
        <div className="upcoming-schedule">
          <h3>Upcoming Schedule</h3>
          <div className="schedule-timeline">
            {channel.upcomingBroadcasts.map((broadcast) => (
              <div key={broadcast.id} className="schedule-item">
                <h5>{broadcast.title}</h5>
                <p>{broadcast.description}</p>
                <small>
                  <FontAwesomeIcon icon={faCalendarAlt} /> {broadcast.time}
                </small>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChannelPage;
