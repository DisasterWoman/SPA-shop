import React from 'react'
import styles from './FavoritesBlock.module.scss'
const FavoritesBlock = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span>
        <img src='/images/icons/romance-icon.svg' alt=></img>
        </span>
        <br />
      </h1>
      <p className={styles.description}>Unfortunately this page connot be found </p>
    </div>
  )
}

export default FavoritesBlock