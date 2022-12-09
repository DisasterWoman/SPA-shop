import React from 'react';
import styles from './NotFoundBlock.module.scss';

const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span>😕</span>
        <br />
        Oh No! Error 404
      </h1>
      <p className={styles.description}>Unfortunately this page connot be  </p>
    </div>
  );
}

export default NotFoundBlock