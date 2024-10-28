import React from "react";

const ChannelDetailModal = ({ channel, onClose }) => {
  const [showLoginPrompt, setShowLoginPrompt] = React.useState(false);

  const handleFollowClick = () => {
    setShowLoginPrompt(true);
    setTimeout(() => setShowLoginPrompt(false), 3000);
  };
  if (!channel) return null;

  return (
    <div className="modal show d-block tabIndex='-1' role='dialog'">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{channel.name}</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">
            <img
              src={channel.logo}
              alt={`${channel.name} logo`}
              className="img-fluid mb-3"
            />
            <p>{channel.description}</p>
            <p>
              <strong>Genre:</strong> {channel.genre}
            </p>
            <p>
              <strong>Country:</strong> {channel.country}
            </p>
            <p>
              <strong>Frequency:</strong> {channel.frequency}
            </p>
            <button className="btn btn-primary me-2">Listen Now</button>
            <button
              onClick={handleFollowClick}
              className="btn btn-outline-secondary"
              disabled
            >
              Follow
            </button>
            {showLoginPrompt && (
              <p className="text-danger mt-2">
                You need to log in or register to follow channels.
              </p>
            )}
          </div>
          <div className="modal-footer">
            <button
              className="btn btn-link"
              onClick={() => (window.location.href = `/channels/${channel.id}`)}
            >
              View Full Details
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ChannelDetailModal;
