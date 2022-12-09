import React from 'react';
import './_header.scss';
import { ButtonHeader } from './ButtonHeader';
import { Link } from 'react-router-dom';
import styles from './button.module.scss';

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <Link to="/">
          <div className={styles.headeLogo}>
            <img width="220" src="/dreamy-dress.png" alt="logo" />
            <div></div>
          </div>
        </Link>
        <div className="cart-wrap">
          <Link to="/cart" className={styles.buttonCart}>
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
