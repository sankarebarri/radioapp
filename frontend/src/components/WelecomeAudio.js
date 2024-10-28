// src/components/WelcomeAudio.js
import React, { useEffect, useState } from "react";
import "../styles/WelcomeAudio.css";

const WelcomeAudio = () => {
  const [audio] = useState(new Audio("/path/to/welcome-audio.mp3")); // Path to your welcome audio file
  const [isPlaying, setIsPlaying] = useState(false);
  const [showAudioPrompt, setShowAudioPrompt] = useState(false);

  useEffect(() => {
    const isFirstVisit = !localStorage.getItem("visited");
    if (isFirstVisit) {
      setShowAudioPrompt(true);
      localStorage.setItem("visited", true); // Mark as visited
    }

    // Cleanup audio on unmount
    return () => {
      audio.pause();
    };
  }, [audio]);

  const handlePlay = () => {
    audio.play();
    setIsPlaying(true);
    setShowAudioPrompt(false);
  };

  const handlePause = () => {
    audio.pause();
    setIsPlaying(false);
  };

  const handleClose = () => {
    setShowAudioPrompt(false);
    audio.pause();
  };

  return (
    <>
      {showAudioPrompt && (
        <div className="audio-prompt">
          <p>Welcome! Want a taste of what we offer? 🎶</p>
          <button className="btn play" onClick={handlePlay}>
            Play
          </button>
          <button className="btn close" onClick={handleClose}>
            Close
          </button>
        </div>
      )}

      {isPlaying && (
        <div className="audio-controls">
          <button className="btn pause" onClick={handlePause}>
            Pause
          </button>
          <button className="btn close" onClick={handleClose}>
            Close
          </button>
        </div>
      )}
    </>
  );
};

export default WelcomeAudio;
