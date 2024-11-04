// src/pages/UserAuthenticatedHomePage.js
import React, { useState, useEffect, useCallback } from "react";
import api from "../services/api"; // Your API service
import ChannelCard from "../components/ChannelCard"; // Importing ChannelCard component
import BroadcastCard from "../components/BroadcastCard"; // Importing BroadcastCard component
import "../styles/UserAuthenticatedHomePage.css"; // Styles for the authenticated home page

const UserAuthenticatedHomePage = () => {
  const [followedChannels, setFollowedChannels] = useState([]);
  const [broadcasts, setBroadcasts] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true); // State to check if more broadcasts are available

  useEffect(() => {
    const fetchData = async () => {
      try {
        const channelsResponse = await api.get("/channels/followed-channels/");
        setFollowedChannels(channelsResponse.data);

        const broadcastsResponse = await api.get(
          `/broadcasts/followed-broadcasts/?page=${page}`
        );
        setBroadcasts((prev) => [...prev, ...broadcastsResponse.data]); // Append new broadcasts
        // console.log(broadcastsResponse.data[0]);

        setHasMore(broadcastsResponse.data.length > 0); // Update hasMore based on response
      } catch (error) {
        console.error("Error fetching channels or broadcasts", error);
      }
    };

    fetchData();
  }, [page]); // Fetch data whenever the page changes

  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight &&
      hasMore
    ) {
      setPage((prevPage) => prevPage + 1); // Increment page to fetch more broadcasts
    }
  }, [hasMore]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div className="user-authenticated-home-page">
      <aside className="sidebar">
        <h2>Your Followed Channels</h2>
        {followedChannels.map((channel) => (
          <ChannelCard
            key={`${channel.channel.id}-${channel.channel.channel_name}`}
            channel={channel}
          />
        ))}
      </aside>
      <main className="main-content">
        <h2>Broadcasts</h2>
        <hr className="section-divider" />
        <div className="broadcast-list">
          {broadcasts.map((broadcast) => (
            <BroadcastCard
              key={`${broadcast.id}-${broadcast.channel_name}`}
              broadcast={broadcast}
              // Is this(onListen) important?
              onListen={(id) => console.log(`Listening to broadcast ${id}`)}
            />
          ))}
        </div>
        {!hasMore && <p>No more broadcasts available</p>}{" "}
        {/* Message for no more broadcasts */}
      </main>
    </div>
  );
};

export default UserAuthenticatedHomePage;
