import React from "react";
import api from "../services/api";
import SearchFilter from "../components/SearchFilter";
import ChannelsGrid from "../components/ChannelsGrid";

const BrowseChannels = () => {
  const [channels, setChannels] = React.useState([]);
  const [filteredChannels, setFilteredChannels] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchChannels = async () => {
      try {
        const response = await api.get("/channels/browse/");
        setChannels(response.data);
        setFilteredChannels(response.data);
      } catch (error) {
        setError("Failed to fetch channels", error);
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
    return <div>{error}</div>;
  }

  return (
    <div className="browse-channels">
      <SearchFilter onFilter={handleFilter} />
      <h2 className="text-center">Available Channels</h2>
      <ChannelsGrid channels={filteredChannels} />
    </div>
  );
};
export default BrowseChannels;
