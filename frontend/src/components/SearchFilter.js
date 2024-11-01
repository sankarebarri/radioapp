// src/components/SearchFilter.js
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "../styles/SearchFilter.css";

const SearchFilter = ({ onFilter }) => {
  const { register, watch } = useForm();
  const searchTerm = watch("searchTerm");

  // Debounce function
  useEffect(() => {
    const handler = setTimeout(() => {
      onFilter(searchTerm || ""); // Call onFilter after debounce delay
    }, 300); // Adjust delay time as needed

    return () => {
      clearTimeout(handler); // Clear the timeout if searchTerm changes
    };
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
