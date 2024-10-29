// src/pages/PlayingPage.js
import React, { useState, useRef } from "react";
import ReactPlayer from "react-player";
import BroadcastInfo from "../components/BroadcastInfo";
import AudioControls from "../components/AudioControls";
import AdditionalControls from "../components/AdditionalControls";
import PlaybackSettings from "../components/PlaybackSettings";
import "../styles/PlayingPage.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const PlayingPage = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.8);
  const [played, setPlayed] = useState(0);
  const [loop, setLoop] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);
  const playerRef = useRef(null);

  const handlePlayPause = () => setIsPlaying(!isPlaying);
  const handleProgress = (state) => setPlayed(state.played);
  const skipForward = () =>
    playerRef.current.seekTo(playerRef.current.getCurrentTime() + 10);
  const skipBackward = () =>
    playerRef.current.seekTo(playerRef.current.getCurrentTime() - 10);

  return (
    <div>
      <Header />
      <div className="playing-page">
        <BroadcastInfo
          title="Jazz Classics"
          channel="Cool Jazz FM"
          description="Smooth jazz classics to relax and unwind."
        />
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
          controls={false}
        />
        <AudioControls
          isPlaying={isPlaying}
          onPlayPause={handlePlayPause}
          onSkipForward={skipForward}
          onSkipBackward={skipBackward}
          volume={volume}
          setVolume={setVolume}
          played={played}
          setPlayed={setPlayed}
        />
        <PlaybackSettings
          loop={loop}
          setLoop={setLoop}
          playbackRate={playbackRate}
          setPlaybackRate={setPlaybackRate}
        />
        <AdditionalControls />
      </div>
      <Footer />
    </div>
  );
};

export default PlayingPage;
