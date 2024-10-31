import React from "react";
import api from "../services/api";

const BroadcastList = () => {
  const [broadcast, setBroadcast] = React.useState("");
  React.useEffect(() => {
    const fetchBroadcasts = async () => {
      try {
        const response = await api.get("/broadcasts/");
        console.log(response.data);
        setBroadcast("It's connecting to the BE");
      } catch (error) {
        setBroadcast("Not connecting to the BE");
        console.error("Can't retreive broadcast");
      }
    };
    fetchBroadcasts();
  }, []);
  return (
    <div>
      <p>{broadcast}</p>
    </div>
  );
};
export default BroadcastList;
