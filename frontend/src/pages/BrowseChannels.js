// src/pages/BrowseChannels.js
import React, { useState, useEffect } from "react";
import SearchFilter from "../components/SearchFilter";
import ChannelsGrid from "../components/ChannelsGrid";
import api from "../services/api"; // Importing API as specified
import "../styles/BrowseChannels.css";

const BrowseChannels = () => {
  const [channels, setChannels] = useState([]);
  const [filteredChannels, setFilteredChannels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchChannels = async () => {
      try {
        const response = await api.get("/channels/browse/");
        setChannels(response.data);
        setFilteredChannels(response.data);
      } catch (err) {
        setError("Failed to fetch channels.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchChannels();
  }, []);

  const handleFilter = (term) => {
    const filtered = channels.filter((channel) =>
      channel.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredChannels(filtered);
  };

  if (loading) {
    return <div>Loading channels...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="browse-channels">
      <h2>Available Channels</h2>
      <SearchFilter onFilter={handleFilter} />
      <ChannelsGrid channels={filteredChannels} />
    </div>
  );
};

export default BrowseChannels;
