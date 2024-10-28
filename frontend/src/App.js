import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import BrowseChannels from "./pages/BrowseChannels";
import ChannelPage from "./pages/ChannelPage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<BrowseChannels />}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="channels/:id" element={<ChannelPage />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
