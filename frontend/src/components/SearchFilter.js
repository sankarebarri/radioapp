// src/components/SearchFilter.js
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "../styles/SearchFilter.css";

const SearchFilter = ({ onFilter }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    onFilter(term);
  };

  return (
    <div className="search-filter">
      <FontAwesomeIcon icon={faSearch} className="search-icon" />
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search channels..."
        className="search-input"
      />
    </div>
  );
};

export default SearchFilter;
