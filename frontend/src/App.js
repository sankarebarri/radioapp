import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import BrowseChannels from "./pages/BrowseChannels";
import ChannelPage from "./pages/ChannelPage";
import PlayingPage from "./pages/PlayingPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<BrowseChannels />}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="channel/:id" element={<ChannelPage />}></Route>
        <Route path="play/:broadcastId" element={<PlayingPage />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
