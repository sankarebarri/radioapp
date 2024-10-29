// src/pages/ChannelOwnerPage.js
import React from "react";
import ChannelOverview from "../components/ChannelOverview";
import BroadcastManagement from "../components/BroadcastManagement";
import AnalyticsSummary from "../components/AnalyticsSummary";

const ChannelOwnerPage = () => {
  // Placeholder data for channel and broadcasts
  const channel = {
    name: "Cool Jazz FM",
    genre: "Jazz",
    followers: 1200,
    description: "The best jazz from around the world.",
    logo: "https://via.placeholder.com/100",
  };

  const broadcasts = [
    {
      id: 1,
      title: "Jazz Classics",
      description: "Smooth jazz classics.",
      date: "Oct 24, 2024",
      likes: 150,
      plays: 400,
      downloads: 50,
    },
    {
      id: 2,
      title: "Evening Jazz",
      description: "Relaxing jazz for the evening.",
      date: "Oct 23, 2024",
      likes: 100,
      plays: 300,
      downloads: 30,
    },
  ];

  const analytics = {
    totalFollowers: 1200,
    totalPlays: 700,
    totalLikes: 250,
  };

  const handleAddBroadcast = () => {
    alert("Add Broadcast form goes here.");
  };

  return (
    <div className="channel-owner-page">
      <ChannelOverview channel={channel} />
      <BroadcastManagement
        broadcasts={broadcasts}
        onAddBroadcast={handleAddBroadcast}
      />
      <AnalyticsSummary analytics={analytics} />
    </div>
  );
};

export default ChannelOwnerPage;
