// src/components/AdditionalControls.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faShare,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";

const AdditionalControls = () => (
  <div className="action-buttons">
    <button className="btn btn-like">
      <FontAwesomeIcon icon={faHeart} /> Like
    </button>
    <button className="btn btn-share">
      <FontAwesomeIcon icon={faShare} /> Share
    </button>
    <button className="btn btn-download">
      <FontAwesomeIcon icon={faDownload} /> Download
    </button>
  </div>
);

export default AdditionalControls;
