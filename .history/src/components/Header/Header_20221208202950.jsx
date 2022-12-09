import React from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.scss';

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <Link to="/">
          <div className={styles.headeLogo}>
            <img className={styles.mainLogo} width="220" src="/dreamy-dress.png" alt="mainLogo" />
            <div></div>
          </div>
        </Link>
        <div className={styles.cartWrap}>
          <Link to="/cart" className={styles.buttonCart}>
            <span className={styles.span}>520 ₽</span>
            <div className={styles.buttonDelimiter}></div>
            <img className={styles.cart} alt="cart" src="/images/icons/cart-icon.svg"></img>
            <div className={styles.buttonDelimiter}></div>
            <L
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
