// src/components/PlaybackSettings.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSyncAlt, faTachometerAlt } from "@fortawesome/free-solid-svg-icons";

const PlaybackSettings = ({ loop, setLoop, playbackRate, setPlaybackRate }) => (
  <div className="additional-controls">
    <button className="control-btn" onClick={() => setLoop(!loop)}>
      <FontAwesomeIcon icon={faSyncAlt} /> {loop ? "Loop On" : "Loop Off"}
    </button>
    <div className="playback-speed">
      <FontAwesomeIcon icon={faTachometerAlt} /> Speed:
      <select
        value={playbackRate}
        onChange={(e) => setPlaybackRate(parseFloat(e.target.value))}
      >
        <option value={0.5}>0.5x</option>
        <option value={1}>1x</option>
        <option value={1.5}>1.5x</option>
        <option value={2}>2x</option>
      </select>
    </div>
  </div>
);

export default PlaybackSettings;
