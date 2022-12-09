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
        <div>
        
        </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
