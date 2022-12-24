import React from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.scss';
import SearchBar from '../SearchBar/SearchBar';

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <Link to="/">
          <div className={styles.headerLogo}>
            <img className={styles.mainLogo} width="280" src="/dreamy-dress.png" alt="mainLogo" />
            <div></div>
          </div>
        </Link>
        <SearchBar/>
        <div className={styles.cartWrap}>
          <Link to="/cart" className={styles.buttonCart}>
            <span className={styles.price}>520 ₽</span>
            <div className={styles.buttonDelimiter}></div>
            <img className={styles.cart} alt="cart" src="/images/icons/cart-icon.svg"></img>
            <div className={styles.buttonDelimiter}></div>
          </Link>
          <Link to="/favorites" className={styles.buttonCart}>
            <img className={styles.heart} alt="heart" src="/images/icons/heart-empty.svg"></img>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
