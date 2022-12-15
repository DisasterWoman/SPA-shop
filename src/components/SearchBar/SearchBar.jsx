import React, {useState}  from 'react'
import styles from'./searchBar.module.scss';
function SearchBar() {
  return (
    <div className={styles.searchBar}>
      <img
        className={styles.searchIcon}
        alt="search"
        src="images/icons/search.svg"
      ></img>
      <input className="input" placeholder="Search..."></input>
    </div>
  );
}

export default SearchBar