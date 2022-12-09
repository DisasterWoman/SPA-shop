import React from 'react';
import styles from './NotFoundBlock.module.scss';

const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span>😕</span>
        <br />
        Oh No
      </h1>
      <p className={styles.description}>Unfortunatley this page connot be </p>
    </div>
  );
}

export default NotFoundBlock