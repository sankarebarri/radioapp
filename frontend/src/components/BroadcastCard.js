// src/components/BroadcastCard.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faDownload,
  faCheckCircle,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/BroadcastCard.css";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

const BroadcastCard = ({ broadcast, onListen }) => {
  const {
    id,
    title,
    description,
    channel_name,
    timestamp,
    user_interactions,
    likes_count,
  } = broadcast;

  const [liked, setLiked] = React.useState(user_interactions?.liked || false);
  const [downloaded, setDownloaded] = React.useState(
    user_interactions?.downloaded || false
  );
  const [error, setError] = React.useState(null);
  // const downloaded = user_interactions?.downloaded || false;
  const is_listened_to = user_interactions?.is_listened_to || false;

  const navigate = useNavigate();

  const handleLike = async () => {
    try {
      const responseLike = await api.post(`broadcasts/broadcasts/${id}/like/`, {
        like: !liked, // Toggle like
      });
      setLiked(!liked); // Toggle local liked state
      // console.log(responseLike);
    } catch (error) {
      setError("Failed to like the broadcast");
      // console.error(error);
    }
  };

  const handleDownload = async () => {
    try {
      const responseDownload = await api.post(
        `broadcasts/broadcasts/${id}/download/`,
        {
          downloaded: true,
        }
      );
      setDownloaded(true);
      // console.log(responseDownload);
    } catch (error) {
      setError("Failed to download the broadcast");
    }
  };
  // handleDownload();

  return (
    <div
      className={`broadcast-card ${
        is_listened_to ? "listened" : "not-listened"
      }`}
    >
      <h3 className="broadcast-title">{title}</h3>
      <p className="broadcast-description">{description}</p>
      <div className="broadcast-meta">
        <small className="broadcast-channel">Channel: {channel_name}</small>
        <small className="broadcast-timestamp">
          {new Date(timestamp).toLocaleString()}
        </small>
      </div>
      <div className="broadcast-actions">
        <button onClick={() => navigate(`/play/${id}`)}>
          <FontAwesomeIcon icon={faPlay} />{" "}
          {is_listened_to ? "Listen Again" : "Listen Now"}
        </button>
        <button onClick={handleLike}>
          <FontAwesomeIcon
            icon={faThumbsUp}
            style={{ color: liked ? "blue" : "red" }}
          />
          {likes_count + (liked ? 1 : 0)} Likes
        </button>
        {!downloaded ? (
          <button onClick={handleDownload} className="download-button">
            <FontAwesomeIcon icon={faDownload} /> Download
          </button>
        ) : (
          <FontAwesomeIcon
            icon={faCheckCircle}
            className="downloaded-icon"
            style={{ fontSize: "2.5rem" }}
          />
        )}
      </div>
    </div>
  );
};

export default BroadcastCard;
