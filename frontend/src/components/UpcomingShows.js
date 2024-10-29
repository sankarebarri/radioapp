// src/components/UpcomingShows.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import "../styles/UpcomingShows.css";

const UpcomingShows = ({ shows }) => {
  return (
    <div className="upcoming-shows">
      <h2>Upcoming Shows</h2>
      <ul>
        {shows.map((show) => (
          <li key={show.id} className="show-item">
            <h4 className="show-title">{show.title}</h4>
            <p className="show-description">{show.description}</p>
            <small className="show-schedule">
              <FontAwesomeIcon icon={faCalendarAlt} /> {show.date} at{" "}
              {show.time}
            </small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UpcomingShows;
