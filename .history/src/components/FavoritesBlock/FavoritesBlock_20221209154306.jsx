import React from 'react'
import styles from './'
const FavoritesBlock = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span>😕</span>
        <br />
        Oh No! Error 404
      </h1>
      <p className={styles.description}>Unfortunately this page connot be found </p>
    </div>
  );
}

export default FavoritesBlock