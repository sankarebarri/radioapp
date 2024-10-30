import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
// import Navbar from "./components/Navbar";
import BrowseChannels from "./pages/BrowseChannels";
import ChannelPage from "./pages/ChannelPage";
import PlayingPage from "./pages/PlayingPage";
import ChannelOwnerPage from "./pages/ChannelOwnerPage";
import { AuthProvider } from "./context/AuthContext";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<BrowseChannels />}></Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="channel/:id" element={<ChannelPage />}></Route>
          <Route path="play/:broadcastId" element={<PlayingPage />}></Route>
          <Route path="/channel-owner" element={<ChannelOwnerPage />} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
};

export default App;
