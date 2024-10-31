import React from "react";
import api from "../services/api";
import { getAccessToken } from "../utils/token";

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
        // console.log("Profile data:", response.data);

        setProfile(response.data);
      } catch (error) {
        // setError("Failed to fetch profile. Please check your permissions.");
        // console.error("Failed to fetch profile:", error);
      }
    };
    fetchProfile();
  }, []);
  // if (error) return <p>{error}</p>;
  if (!profile) return <p>Loading...</p>;

  return (
    <div className="profile-page">
      <h1 className="text-center">{profile.username}'s Profile</h1>
      {profile.profile_image && (
        <img
          src={profile.profile_image}
          alt={`${profile.username}'s profile`}
        />
      )}
      <p>
        <strong>Bio:</strong> {profile.bio}
      </p>
      <p>
        <strong>Joined:</strong>
        {new Date(profile.created_at).toLocaleDateString()}
      </p>
    </div>
  );
};
export default Profile;
