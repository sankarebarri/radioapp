// src/pages/FollowedBroadcastsPage.js
import React, { useState, useEffect } from "react";
import FollowedChannelsSidebar from "../components/FollowedChannelsSidebar";
import BroadcastCard from "../components/BroadcastCard";
import api from "../services/api";

const FollowedBroadcastsPage = () => {
  const [channels, setChannels] = useState([]);
  const [broadcasts, setBroadcasts] = useState([]);
  const [filteredBroadcasts, setFilteredBroadcasts] = useState([]);
  const [selectedChannelId, setSelectedChannelId] = useState(null);

  useEffect(() => {
    // Fetch followed channels
    const fetchChannels = async () => {
      try {
        const response = await api.get("channels/followed-channels/");
        setChannels(response.data);
      } catch (error) {
        console.error("Error fetching channels:", error);
      }
    };

    // Fetch followed broadcasts
    const fetchBroadcasts = async () => {
      try {
        const response = await api.get("broadcasts/followed-broadcasts/");
        setBroadcasts(response.data);
        setFilteredBroadcasts(response.data); // Initialize with all broadcasts
      } catch (error) {
        console.error("Error fetching broadcasts:", error);
      }
    };

    fetchChannels();
    fetchBroadcasts();
  }, []);

  // Filter broadcasts based on selected channel
  useEffect(() => {
    if (selectedChannelId) {
      setFilteredBroadcasts(
        broadcasts.filter((b) => b.channel_id === selectedChannelId)
      );
    } else {
      setFilteredBroadcasts(broadcasts); // Show all if no channel is selected
    }
  }, [selectedChannelId, broadcasts]);

  return (
    <div className="followed-broadcasts-page">
      <FollowedChannelsSidebar
        channels={channels}
        onChannelSelect={setSelectedChannelId}
        selectedChannelId={selectedChannelId}
      />
      <div className="broadcast-list">
        {filteredBroadcasts.map((broadcast) => (
          <BroadcastCard key={broadcast.id} broadcast={broadcast} />
        ))}
      </div>
    </div>
  );
};

export default FollowedBroadcastsPage;
