import React from 'react';
import styles from './searchBar.module.scss';
import debounce from 'lodash.debounce';
import { GlobalContext } from '../../App';

function SearchBar() {
  const {searchValue, setSearchValue } = React.useContext(GlobalContext);
  console.log(searchValue)
  const inputRef = React.useRef();
  const [value, setValue] = React.useState('');


  const onClickClear = () => {
    setSearchValue('');
    setValue('');
    inputRef.current.focus();
  };
  const updateSearch = React.useCallback(
    debounce((str) => {
      setSearchValue(str);
    }, 300),
    [],
  );

    const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearch(event.target.value);
  };

  return (
    <div className={styles.searchBar}>
      <div className={styles.searchLeft}>
        <img className={styles.searchIcon} alt="search" src="images/icons/search.svg"></img>
        <input
          ref={inputRef}
          value={value}
          className="input"
          onChange={onChangeInput}
          placeholder="Search..."
        ></input>
      </div>
      {value && (
        <div className={styles.searchRight}>
          <img
            className={styles.closeIcon}
            onClick={onClickClear}
            src="images/icons/close-icon.svg"
            alt="close"
          />
        </div>
      )}
    </div>
  );
}

export default SearchBar;
