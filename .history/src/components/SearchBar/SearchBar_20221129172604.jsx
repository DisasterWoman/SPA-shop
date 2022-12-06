import React, {useState}  from 'react'

function SearchBar() {
  return (
    <div className="search-bar">
      <img
        className="mr-20 mt-5 mb-5"
        alt="search"
        src="images/search.svg"
        width={12}
        height={13}
      ></img>
      <input
        placeholder="Search..."
        onChange={(event) => setValues(event.target.value)}
      ></input>
    </div>
  );
}

export default SearchBar