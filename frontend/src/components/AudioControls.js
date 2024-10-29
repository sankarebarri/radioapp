// src/components/AudioControls.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faBackward,
  faForward,
} from "@fortawesome/free-solid-svg-icons";

const AudioControls = ({
  isPlaying,
  onPlayPause,
  onSkipForward,
  onSkipBackward,
  volume,
  setVolume,
  played,
  setPlayed,
}) => (
  <div className="audio-player">
    <button className="control-btn" onClick={onSkipBackward}>
      <FontAwesomeIcon icon={faBackward} /> 10s
    </button>
    <button className="play-pause-btn" onClick={onPlayPause}>
      <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
    </button>
    <button className="control-btn" onClick={onSkipForward}>
      <FontAwesomeIcon icon={faForward} /> 10s
    </button>
    <div className="progress-container">
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={played}
        onChange={(e) => setPlayed(parseFloat(e.target.value))}
        className="progress-slider"
      />
    </div>
    <input
      type="range"
      min="0"
      max="1"
      step="0.1"
      value={volume}
      onChange={(e) => setVolume(parseFloat(e.target.value))}
      className="volume-slider"
    />
  </div>
);

export default AudioControls;
