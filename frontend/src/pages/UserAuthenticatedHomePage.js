// src/pages/UserAuthenticatedHomePage.js
import React, { useState, useEffect } from "react";
import api from "../services/api"; // Your API service
import "../styles/UserAuthenticatedHomePage.css"; // Styles for the authenticated home page

const UserAuthenticatedHomePage = () => {
  const [followedChannels, setFollowedChannels] = useState([]);
  const [broadcasts, setBroadcasts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const channelsResponse = await api.get("/channels/followed-channels/");
        setFollowedChannels(channelsResponse.data);

        const broadcastsResponse = await api.get(
          "/broadcasts/followed-broadcasts/"
        );
        setBroadcasts(broadcastsResponse.data);
      } catch (error) {
        console.error("Error fetching channels or broadcasts", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="user-authenticated-home-page">
      <aside className="sidebar">
        <h2>Your Followed Channels</h2>
        <ul>
          {followedChannels.map((channel) => (
            <li key={channel.channel.id}>{channel.channel.name}</li>
          ))}
        </ul>
      </aside>
      <main className="main-content">
        <h2>Broadcasts</h2>
        <div className="broadcast-list">
          {broadcasts.map((broadcast) => (
            <div key={broadcast.id} className="broadcast-item">
              <h3>{broadcast.title}</h3>
              <p>{broadcast.description}</p>
              <small>Channel: {broadcast.channel_name}</small>
              <small>{new Date(broadcast.timestamp).toLocaleString()}</small>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default UserAuthenticatedHomePage;
