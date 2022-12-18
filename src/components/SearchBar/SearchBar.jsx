import React, { useState } from 'react';
import styles from './searchBar.module.scss';
function SearchBar({ searchValue, setSearhValue }) {
  return (
    <div className={styles.searchBar}>
      <div className={styles.searchLeft}>
        <img className={styles.searchIcon} alt="search" src="images/icons/search.svg"></img>
        <input 
          value={searchValue}
          className="input"
          onChange={(event) => setSearhValue(event.target.value)}
          placeholder="Search..."
        ></input>
      </div>
      {searchValue && (
        <div onClick={() => setSearhValue('')} className={styles.searchRight}>
          <img className={styles.closeIcon} src="images/icons/close-icon.svg" alt="close" />
        </div>
      )}
    </div>
  );
}

export default SearchBar;
