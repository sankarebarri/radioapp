// src/pages/Profile.js
import React from "react";
import api from "../services/api";
import { getAccessToken } from "../utils/token";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import "../styles/Profile.css"; // Link to custom styling

const Profile = () => {
  const [profile, setProfile] = React.useState(null);
  const [error, setError] = React.useState("");

  React.useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = getAccessToken();
        const response = await api.get("users/profile/", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProfile(response.data);
      } catch (error) {
        setError("Failed to fetch profile. Please check your permissions.");
        console.error("Failed to fetch profile:", error);
      }
    };
    fetchProfile();
  }, []);

  if (error) return <p>{error}</p>;
  if (!profile) return <p>Loading...</p>;

  return (
    <div className="profile-page">
      <div className="profile-card">
        <div className="profile-image-container">
          <img
            src={profile.profile_image || "https://via.placeholder.com/150"}
            alt={`${profile.username}'s profile`}
            className="profile-image"
          />
        </div>
        <div className="profile-info">
          <h1 className="profile-username">
            <FontAwesomeIcon icon={faUser} /> {profile.username}
          </h1>
          <p className="profile-bio">{profile.bio || "No bio available"}</p>
          <p className="profile-joined">
            <FontAwesomeIcon icon={faCalendarAlt} /> <strong>Joined:</strong>{" "}
            {new Date(profile.created_at).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
