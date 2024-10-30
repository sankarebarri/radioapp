// src/pages/BrowseChannels.js
import React, { useState, useEffect } from "react";
import SearchFilter from "../components/SearchFilter";
import FeaturedChannels from "../components/FeaturedChannels";
import ChannelsGrid from "../components/ChannelsGrid";
import placeholderChannels from "../data/placeholderChannels"; // Assuming this file is in the data folder
import "../styles/BrowseChannels.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const BrowseChannels = () => {
  const [channels, setChannels] = useState([]);
  const [filteredChannels, setFilteredChannels] = useState([]);

  useEffect(() => {
    setChannels(placeholderChannels); // Load placeholder channels
    setFilteredChannels(placeholderChannels); // Initially display all channels
  }, []);

  const handleFilter = (criteria) => {
    const results = channels.filter((channel) =>
      channel.name.toLowerCase().includes(criteria.toLowerCase())
    );
    setFilteredChannels(results);
  };

  return (
    <div className="browse-channels">
      <SearchFilter onFilter={handleFilter} />
      <FeaturedChannels channels={channels.slice(0, 3)} />
      <ChannelsGrid channels={filteredChannels} />
    </div>
  );
};

export default BrowseChannels;
