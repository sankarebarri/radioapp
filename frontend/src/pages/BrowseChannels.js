// src/pages/BrowseChannels.js
import React, { useState, useEffect } from "react";
import SearchFilter from "../components/SearchFilter";
import FeaturedChannels from "../components/FeaturedChannels";
import ChannelsGrid from "../components/ChannelsGrid";
import "../styles/BrowseChannels.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const BrowseChannels = () => {
  // Placeholder data for channels
  const [channels, setChannels] = useState([]);
  const [filteredChannels, setFilteredChannels] = useState([]);

  useEffect(() => {
    // Fetch channels data from API or placeholder data
    const fetchChannels = async () => {
      // Placeholder data for example
      const exampleChannels = [
        {
          id: 1,
          name: "Jazz Vibes",
          genre: "Jazz",
          country: "USA",
          description: "Smooth jazz 24/7.",
        },
        {
          id: 2,
          name: "News Hour",
          genre: "News",
          country: "UK",
          description: "Latest global news.",
        },
        // Add more example channels
      ];
      setChannels(exampleChannels);
      setFilteredChannels(exampleChannels); // Initially, show all channels
    };

    fetchChannels();
  }, []);

  // Filter channels based on search or filter criteria
  const handleFilter = (criteria) => {
    const results = channels.filter((channel) =>
      channel.name.toLowerCase().includes(criteria.toLowerCase())
    );
    setFilteredChannels(results);
  };

  return (
    <div className="browse-channels">
      <Header />
      <SearchFilter onFilter={handleFilter} />
      <FeaturedChannels channels={channels.slice(0, 3)} />
      <ChannelsGrid channels={filteredChannels} />
      <Footer />
    </div>
  );
};

export default BrowseChannels;
