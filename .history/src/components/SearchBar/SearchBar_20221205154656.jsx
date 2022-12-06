import React, {useState}  from 'react'
import './_searchBar.scss';
function SearchBar() {
  return (
    <div className="search-bar">
      <img
        className="search-bar__icon       "
        alt="search"
        src="images/icons/search.svg"
        width={12}
        height={13}
      ></img>
      <input
        placeholder="Search..."
      ></input>
    </div>
  );
}

export default SearchBar