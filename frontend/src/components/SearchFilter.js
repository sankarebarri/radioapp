// src/components/SearchFilter.js
import React, { useState } from "react";
import "../styles/SearchFilter.css";

const SearchFilter = ({ onFilter }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    onFilter(term); // Send search term to parent component
  };

  return (
    <div className="search-filter">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search channels..."
        className="search-input"
      />
      {/* Future: Add dropdowns for genre, country filters */}
    </div>
  );
};

export default SearchFilter;
