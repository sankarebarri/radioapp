// src/pages/ChannelPage.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faDownload,
  faHeart,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/ChannelPage.css";

const ChannelPage = () => {
  const { id } = useParams();
  const [channel, setChannel] = useState(null);
  const [showAllRecent, setShowAllRecent] = useState(false);
  const [showAllUpcoming, setShowAllUpcoming] = useState(false);
  const [showLoginPrompt, setShowLoginPrompt] = useState(false); // State for login prompt

  // Example placeholder for checking login status
  const isLoggedIn = false; // Change this when implementing actual authentication

  useEffect(() => {
    const placeholderChannels = [
      {
        id: "1",
        name: "Cool Jazz FM",
        genre: "Jazz",
        country: "USA",
        frequency: "104.3 FM",
        description: "The best jazz from around the world.",
        logo: "https://via.placeholder.com/100",
        recentBroadcasts: [
          {
            id: "1",
            title: "Jazz Classics",
            description: "Smooth jazz classics.",
            timestamp: "Oct 24, 2024",
          },
          {
            id: "2",
            title: "Evening Jazz",
            description: "Relaxing jazz to unwind.",
            timestamp: "Oct 23, 2024",
          },
        ],
        upcomingBroadcasts: [
          {
            id: "4",
            title: "Morning Jazz",
            description: "Start your day with jazz.",
            time: "9:00 AM",
          },
          {
            id: "5",
            title: "Live Jazz Night",
            description: "A special live jazz performance.",
            time: "8:00 PM",
          },
        ],
      },
    ];

    const channelData = placeholderChannels.find((ch) => ch.id === id);
    if (channelData) {
      setChannel(channelData);
    }
  }, [id]);

  const handleFollowClick = () => {
    if (!isLoggedIn) {
      setShowLoginPrompt(true);
      setTimeout(() => setShowLoginPrompt(false), 3000); // Hide prompt after 3 seconds
    } else {
      // Handle follow logic for logged-in users here
    }
  };

  if (!channel) return <p>Loading...</p>;

  return (
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
            <strong>Genre:</strong> {channel.genre} | <strong>Country:</strong>{" "}
            {channel.country} | <strong>Frequency:</strong> {channel.frequency}
          </p>
          <p>{channel.description}</p>
        </div>
      </div>

      {/* Action Buttons with Follow Button Prompt */}
      <div className="action-buttons">
        <button className="btn btn-primary me-2">
          <FontAwesomeIcon icon={faPlay} /> Listen Now
        </button>
        <button
          className="btn btn-outline-secondary me-2"
          onClick={handleFollowClick}
        >
          <FontAwesomeIcon icon={faHeart} /> Follow
        </button>
        <button className="btn btn-outline-secondary">
          <FontAwesomeIcon icon={faShare} /> Share
        </button>
      </div>

      {/* Login Prompt */}
      {showLoginPrompt && (
        <p className="login-prompt text-danger">
          Please log in to follow channels.
        </p>
      )}

      {/* Rest of the ChannelPage content (Recent Broadcasts, Upcoming Schedule, etc.) */}
      {/* Recent Broadcasts Section */}
      <div className="recent-broadcasts mb-5">
        <h3>Recent Broadcasts</h3>
        <div className="broadcast-carousel">
          {channel.recentBroadcasts.map((broadcast) => (
            <div key={broadcast.id} className="broadcast-card">
              <h5>{broadcast.title}</h5>
              <p>{broadcast.description}</p>
              <small>{broadcast.timestamp}</small>
              <div className="mt-2">
                <button className="btn btn-sm btn-primary me-2">
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

      {/* Upcoming Schedule Section */}
      <div className="upcoming-schedule">
        <h3>Upcoming Schedule</h3>
        <div className="schedule-timeline">
          {channel.upcomingBroadcasts.map((broadcast) => (
            <div key={broadcast.id} className="schedule-item">
              <h5>{broadcast.title}</h5>
              <p>{broadcast.description}</p>
              <small>Time: {broadcast.time}</small>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChannelPage;
