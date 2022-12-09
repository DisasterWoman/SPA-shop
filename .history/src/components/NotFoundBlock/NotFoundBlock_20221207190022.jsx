import React from 'react';
import styles from './NotFoundBlock.module.scss';

const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span>😕</span>
        <br />
        444 Not Found
      </h1>
      <p className={styles.de}></p>
    </div>
  );
}

export default NotFoundBlock