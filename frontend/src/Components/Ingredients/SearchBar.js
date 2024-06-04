import React from "react";

const SearchBar = ({ onSearch, searchQuery }) => {
  const handleSearchChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search ingredients..."
      value={searchQuery}
      onChange={handleSearchChange}
    />
  );
};

export default SearchBar;
