// src/components/SearchFilter.js
import React from "react";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "../styles/SearchFilter.css";

const SearchFilter = ({ onFilter }) => {
  const { register, watch } = useForm();

  // Watch the search term
  const searchTerm = watch("searchTerm");

  // Call onFilter whenever the searchTerm changes
  React.useEffect(() => {
    onFilter(searchTerm || ""); // Call onFilter with the search term, default to empty if undefined
  }, [searchTerm, onFilter]);

  return (
    <div className="search-filter">
      <FontAwesomeIcon icon={faSearch} className="search-icon" />
      <input
        type="text"
        {...register("searchTerm")} // Register the input with react-hook-form
        placeholder="Search channels..."
        className="search-input"
      />
    </div>
  );
};

export default SearchFilter;
