import React from "react";
import api from "../services/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faHeart, faDownload } from "@fortawesome/free-solid-svg-icons";
import "../styles/BroadcastList.css";

const BroadcastList = () => {
  const [broadcasts, setBroadcasts] = React.useState([]);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchBroadcasts = async () => {
      try {
        const response = await api.get("broadcasts/");
        setBroadcasts(response.data);
        // setBroadcasts("It's connecting to the BE");
      } catch (error) {
        // setBroadcasts("Not connecting to the BE");
        setError("Not connecting to the BE");
        console.error("Can't retreive broadcast", error);
      }
    };
    fetchBroadcasts();
  }, []);
  if (error) return <p>{error}</p>;
  if (broadcasts.length === 0) return <p>Loading...</p>;
  return (
    // <div>
    //   <h2>Connected to API</h2>
    //   <p>Broadcasts loaded: {broadcasts.length}</p>
    //   <p>{broadcasts}</p>
    // </div>
    <div className="broadcast-list">
      <h2>Broadcasts Feed</h2>
      <div className="broadcast-cards">
        {broadcasts.map((broadcast) => (
          <div key={broadcast.id} className="broadcast-card">
            <h3>{broadcast.title}</h3>
            <p>{broadcast.description}</p>
            <small>Channel: {broadcast.channel}</small>
            <div className="broadcast-actions">
              <button className="btn play">
                <FontAwesomeIcon icon={faPlay} />
              </button>
              <button className="btn like">
                <FontAwesomeIcon icon={faHeart} /> Like
              </button>
              <button className="btn download">
                <FontAwesomeIcon icon={faDownload} /> Download
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default BroadcastList;

// TO-DO
// Sorting/Filter by genre, countries, etc
