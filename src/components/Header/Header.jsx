import React from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.scss';
import SearchBar from '../SearchBar/SearchBar';
import { useSelector } from 'react-redux'; 

function Header() {
  const totalPrice = useSelector(state => state.cartSlice.totalPrice);
  const items = useSelector(state => state.cartSlice.items);
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <Link to="/">
          <div className={styles.headerLogo}>
            <img className={styles.mainLogo} width="280" src="/dreamy-dress.png" alt="mainLogo" />
            <div></div>
          </div>
        </Link>
        <SearchBar />
        <div className={styles.cartWrap}>
          <Link to="/cart" className={styles.buttonCart}>
            <span className={styles.price}>{totalPrice} $</span>
            <div className={styles.buttonDelimiter}></div>
            <img className={styles.cart} alt="cart" src="/images/icons/cart-icon.svg"></img>
            <span className={styles.amount}>{items.length}</span>
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
