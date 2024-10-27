import React from "react";
import ChannelCard from "../components/ChannelCard";
import ChannelDetailModal from "../components/ChannelDetailModal";
// src/pages/BrowseChannels.js

const placeholderChannels = [
  {
    id: 1,
    name: "Cool Jazz FM",
    genre: "Jazz",
    country: "USA",
    frequency: "104.3 FM",
    description: "The best jazz from around the world.",
    logo: "https://via.placeholder.com/100",
  },
  {
    id: 2,
    name: "Classic Rock Radio",
    genre: "Rock",
    country: "UK",
    frequency: "98.7 FM",
    description: "All your favorite classic rock hits.",
    logo: "https://via.placeholder.com/100",
  },
  {
    id: 3,
    name: "Global News Network",
    genre: "News",
    country: "Global",
    frequency: "91.5 FM",
    description: "24/7 news coverage from around the world.",
    logo: "https://via.placeholder.com/100",
  },
];

const BrowseChannels = () => {
  const [selectedChannel, setSelectedChannel] = React.useState(null);
  const [isModalOpen, setIsModalOPen] = React.useState(false);

  const openModal = (channel) => {
    setSelectedChannel(channel);
    setIsModalOPen(true);
  };

  const closeModal = () => {
    setSelectedChannel(null);
    setIsModalOPen(false);
  };

  return (
    <div className="container mt-4">
      <h1>Browse Channels</h1>
      <div className="row">
        {placeholderChannels.map((channel) => (
          <div key={channel.id} className="col-md-4 mb-3">
            <ChannelCard channel={channel} onOpenModal={openModal} />
          </div>
        ))}
      </div>
      {isModalOpen && (
        <ChannelDetailModal channel={selectedChannel} onClose={closeModal} />
      )}
    </div>
  );
};

export default BrowseChannels;
