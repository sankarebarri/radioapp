// src/pages/PlayingPage.js
import React, { useState, useRef } from "react";
import ReactPlayer from "react-player";
import BroadcastInfo from "../components/BroadcastInfo";
import AudioControls from "../components/AudioControls";
import AdditionalControls from "../components/AdditionalControls";
import PlaybackSettings from "../components/PlaybackSettings";
import "../styles/PlayingPage.css";
import { useParams } from "react-router-dom";
import api from "../services/api";

const PlayingPage = () => {
  const { broadcastId } = useParams();
  const [broadcast, setBroadcast] = useState(null);
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

  React.useEffect(() => {
    const fetchBroadcasts = async () => {
      try {
        const response = await api.get(`/broadcasts/broadcasts/${broadcastId}`);
        setBroadcast(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBroadcasts();
  }, [broadcastId]);

  if (!broadcast) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="playing-page">
        <BroadcastInfo
          title={broadcast.title}
          channel={broadcast.channel_name}
          description={broadcast.description}
        />
        <ReactPlayer
          ref={playerRef}
          url={broadcast.audio_url}
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
    </div>
  );
};

export default PlayingPage;
