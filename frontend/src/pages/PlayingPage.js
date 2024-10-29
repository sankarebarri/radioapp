// src/pages/PlayingPage.js
import React, { useState, useRef } from "react";
import ReactPlayer from "react-player";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faBackward,
  faForward,
  faSyncAlt,
  faHeart,
  faShare,
  faDownload,
  faTachometerAlt,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/PlayingPage.css";

const PlayingPage = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.8);
  const [played, setPlayed] = useState(0);
  const [loop, setLoop] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);
  const playerRef = useRef(null);

  const handlePlayPause = () => setIsPlaying(!isPlaying);
  const handleVolumeChange = (e) => setVolume(parseFloat(e.target.value));
  const handleProgress = (state) => setPlayed(state.played);
  const handlePlaybackRateChange = (rate) => setPlaybackRate(rate);

  const skipForward = () => {
    playerRef.current.seekTo(playerRef.current.getCurrentTime() + 10);
  };

  const skipBackward = () => {
    playerRef.current.seekTo(playerRef.current.getCurrentTime() - 10);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div className="playing-page">
      <div className="broadcast-info">
        <h2>Jazz Classics</h2>
        <p>Channel: Cool Jazz FM</p>
        <p className="broadcast-description">
          Enjoy smooth jazz classics to relax and unwind.
        </p>
      </div>

      {/* React Player with ref and custom settings */}
      <ReactPlayer
        ref={playerRef}
        url="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        playing={isPlaying}
        volume={volume}
        loop={loop}
        playbackRate={playbackRate}
        onProgress={handleProgress}
        width="100%"
        height="50px"
        controls={false} // Hide default controls
      />

      {/* Custom Audio Controls */}
      <div className="audio-player">
        <button className="control-btn" onClick={skipBackward}>
          <FontAwesomeIcon icon={faBackward} /> 10s
        </button>
        <button className="play-pause-btn" onClick={handlePlayPause}>
          <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
        </button>
        <button className="control-btn" onClick={skipForward}>
          <FontAwesomeIcon icon={faForward} /> 10s
        </button>
        <div className="progress-container">
          <span>{formatTime(played * 300)}</span>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={played}
            className="progress-slider"
            onChange={(e) => setPlayed(parseFloat(e.target.value))}
          />
          <span>{formatTime((1 - played) * 300)}</span>
        </div>
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={volume}
          onChange={handleVolumeChange}
          className="volume-slider"
        />
      </div>

      {/* Additional Controls */}
      <div className="additional-controls">
        <button className="control-btn" onClick={() => setLoop(!loop)}>
          <FontAwesomeIcon icon={faSyncAlt} /> {loop ? "Loop On" : "Loop Off"}
        </button>
        <div className="playback-speed">
          <FontAwesomeIcon icon={faTachometerAlt} /> Speed:
          <select
            value={playbackRate}
            onChange={(e) =>
              handlePlaybackRateChange(parseFloat(e.target.value))
            }
          >
            <option value={0.5}>0.5x</option>
            <option value={1}>1x</option>
            <option value={1.5}>1.5x</option>
            <option value={2}>2x</option>
          </select>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="action-buttons">
        <button className="btn btn-like">
          <FontAwesomeIcon icon={faHeart} /> Like
        </button>
        <button className="btn btn-share">
          <FontAwesomeIcon icon={faShare} /> Share
        </button>
        <button className="btn btn-download">
          <FontAwesomeIcon icon={faDownload} /> Download
        </button>
      </div>
    </div>
  );
};

export default PlayingPage;
