// import React from "react";
// import api from "../services/api";
// import { getAccessToken } from "../utils/token";

// const Profile = () => {
//   const [profile, setProfile] = React.useState(null);
//   const [error, setError] = React.useState("");

//   React.useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const token = getAccessToken();
//         const response = await api.get("users/profile/", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         setProfile(response.data);
//       } catch (error) {
//         setError("Failed to fetch profile. Please check your permissions.");
//         console.error("Failed to fetch profile:", error);
//       }
//     };
//     fetchProfile();
//   }, []);
//   if (error) return <p>{error}</p>;
//   if (!profile) return <p>Loading...</p>;

//   return (
//     <div className="profile-page">
//       <h1>{profile.user.username}'s Profile</h1>
//       {profile.profile_image && (
//         <img
//           src={profile.profile_image}
//           alt={`${profile.user.username}'s profile`}
//         />
//       )}
//       <p>
//         <strong>Bio:</strong> {profile.bio}
//       </p>
//       <p>
//         <strong>Joined:</strong>
//         {new Date(profile.created_at).toLocaleDateString()}
//       </p>
//     </div>
//   );
// };
// export default Profile;

import React, { useEffect, useState } from "react";
import api from "../services/api";

const Profile = () => {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await api.get("users/profile/");
        setMessage("Profile fetched successfully!");
        console.log("Profile data:", response.data); // Log the data to verify structure
      } catch (error) {
        setMessage("Failed to fetch profile.");
        console.error("Error fetching profile:", error);
      }
    };

    fetchProfile();
  }, []);

  return <h1>{message}</h1>;
};

export default Profile;