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
import Header from "../components/Header";
import Footer from "../components/Footer";

const ChannelPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [channel, setChannel] = useState(null);
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);
  const [followers, setFollowers] = useState(0);

  // Placeholder login status
  const isLoggedIn = false;

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
        followers: 1200, // Follower count placeholder
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
      setFollowers(channelData.followers);
    }
  }, [id]);

  const handleFollowClick = () => {
    if (!isLoggedIn) {
      setShowLoginPrompt(true);
      setTimeout(() => setShowLoginPrompt(false), 3000);
    } else {
      setFollowers((prevFollowers) =>
        channel.isFollowing ? prevFollowers - 1 : prevFollowers + 1
      );
      setChannel((prevChannel) => ({
        ...prevChannel,
        isFollowing: !prevChannel.isFollowing,
      }));
    }
  };

  if (!channel) return <p>Loading...</p>;

  return (
    <div>
      <Header />
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
          <button
            className="btn btn-primary me-2"
            // onClick={() => navigate(`/play/${live.id}`)}
          >
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
      <Footer />
    </div>
  );
};

export default ChannelPage;
