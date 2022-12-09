import React from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.scss';

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <Link to="/">
          <div className={styles.headerLogo}>
            <img className={styles.mainLogo} width="220" src="/dreamy-dress.png" alt="mainLogo" />
            <div></div>
          </div>
        </Link>
        <div className={styles.cartWrap}>
          <Link to="/cart">
          <div></div>
            <span className={styles.span}>520 ₽</span>
            <div className={styles.buttonDelimiter}></div>
            <img className={styles.cart} alt="cart" src="/images/icons/cart-icon.svg"></img>
            <div className={styles.buttonDelimiter}></div>
          </Link>
          <Link to="/favorites">
            <img
              className={styles.heart}
              width={18}
              height={18}
              alt="heart"
              src="/images/icons/heart-empty.svg"
            ></img>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;