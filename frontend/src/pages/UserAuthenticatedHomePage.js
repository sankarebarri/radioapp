import React from "react";
import api from "../services/api";
import "../styles/UserAuthenticatedHomePage.css"; // Styles for the landing page

const UserAuthenticatedHomePage = () => {
  const [channels, setChannels] = React.useState([]);
  const [broadcasts, setBroadcasts] = React.useState([]);
  const [channelsBroadcast, setChannelsBroadcast] = React.useState([]);

  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchChannels = async () => {
      try {
        const response = await api.get("/channels/followed-channels/");
        setChannels(response.data);
        // console.log("Fetching channels");
        // console.log(response.data[0].channel.name);
      } catch (error) {
        setError("Can't fetch the channels", error);
        console.error(error);
      }
    };
    const fetchBroadcasts = async () => {
      try {
        const response = await api.get("/broadcasts/followed-broadcasts/");
        setBroadcasts(response.data);
        // console.log(response.data[0].title);
      } catch (error) {
        setError("Can't fetch the broacasts", error);
        console.error(error);
      }
    };
    fetchChannels();
    fetchBroadcasts();
  }, []);
  return (
    <div className="landing-page">
      <aside className="sidebar">
        <h2>Your Followed Channels</h2>
        <ul>
          {channels.map((channel) => (
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
              <small>{broadcast.timestamp}</small>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};
export default UserAuthenticatedHomePage;
