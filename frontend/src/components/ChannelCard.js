import React from "react";

const ChannelCard = ({ channel, onOpenModal }) => {
  const handleClick = () => {
    onOpenModal(channel);
  };
  return (
    <div className="card" onClick={handleClick} style={{ cursor: "pointer" }}>
      <img src={channel.logo} alt={`${channel.name} logo`} />
      <div>
        <h5>{channel.name}</h5>
        <p>
          {channel.genre} - {channel.country} -
          <strong>{channel.frequency}</strong>
        </p>
      </div>
    </div>
  );
};
export default ChannelCard;
