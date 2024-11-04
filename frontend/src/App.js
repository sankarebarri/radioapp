import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import BrowseChannels from "./pages/BrowseChannels";
import PlayingPage from "./pages/PlayingPage";
import { AuthProvider } from "./context/AuthContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Profile from "./pages/Profile";
import UserAuthenticatedHomePage from "./pages/UserAuthenticatedHomePage";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />

          <Route path="/browse" element={<BrowseChannels />} />
          <Route path="play/:broadcastId" element={<PlayingPage />} />
          <Route
            path="/user-authenticated-home-page"
            element={
              <ProtectedRoute>
                <UserAuthenticatedHomePage />
              </ProtectedRoute>
            }
          />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
};

export default App;
