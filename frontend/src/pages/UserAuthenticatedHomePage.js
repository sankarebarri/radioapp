import React from "react";
import api from "../services/api";
import ChannelCard from "../components/ChannelCard";
import BroadcastCard from "../components/BroadcastCard";
import "../styles/UserAuthenticatedHomePage.css";

const UserAuthenticatedHomePage = () => {
  const [followedChannels, setFollowedChannels] = React.useState([]);
  const [followedBroadcasts, setFollowedBroadcasts] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [error, setError] = React.useState(null);
  const [hasMore, setHasmore] = React.useState(true);
  React.useEffect(() => {
    const fetchChannels = async () => {
      try {
        const channelsResponse = await api.get("/channels/followed-channels");
        setFollowedChannels(channelsResponse.data);
        // console.log(channelsResponse.data);

        // console.log(
        //   "Fetching followed channels data.results",
        //   channelsResponse.data.results
        // );
      } catch (err) {
        setError("followedChannelsError", error);
      }
    };

    const fetchBroadcasts = async () => {
      try {
        const broadcastsResponses = await api.get(
          `/broadcasts/followed-broadcasts/?page=${page}`
        );
        // const broadcastsResponses = await api.get(
        //   "/broadcasts/followed-broadcasts/"
        // );
        // console.log(broadcastsResponses.data.next);

        setFollowedBroadcasts((prev) => {
          const newBroadcasts = broadcastsResponses.data;
          // const uniqueBroadcasts = newBroadcasts.filter(broadcast =>
          //   !prev.some(prevBroadcast => prevBroadcast.id === broadcast.id)
          // );
          const existingIds = new Set(prev.map((broadcast) => broadcast.id));
          const uniqueBroadcasts = newBroadcasts.filter(
            (broadcast) => !existingIds.has(broadcast.id)
          );
          return [...prev, ...uniqueBroadcasts];
        });
        // console.log(broadcastsResponses.data);
        // console.log(broadcastsResponses.data.count);
        // console.log(broadcastsResponses.data.results.length);
        // setRemainingData(
        //   broadcastsResponses.data.count -
        //     broadcastsResponses.data.results.length
        // );
        const moreData = !!broadcastsResponses.data.next;
        setHasmore(moreData);
      } catch (err) {
        setError("Can't fetch followed broadcasts", error);
      }
    };

    fetchChannels();
    fetchBroadcasts();
  }, [page, error]);

  const handleScroll = React.useCallback(() => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight &&
      hasMore
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  }, [hasMore]);

  // console.log(hasMore);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);
  return (
    <div className="user-authenticated-home-page">
      <aside className="sidebar">
        <h3>Followed Channels</h3>
        <hr className="section-divider" />
        {followedChannels.map((channel) => (
          <ChannelCard key={channel.channel.id} channel={channel} />
        ))}
      </aside>
      <main className="main-content">
        <h2>Broadcasts</h2>
        <hr className="section-divider" />
        <div className="broadcast-list">
          {followedBroadcasts.map((broadcast) => (
            <BroadcastCard key={broadcast.id} broadcast={broadcast} />
          ))}
        </div>
      </main>
    </div>
  );
};
export default UserAuthenticatedHomePage;
