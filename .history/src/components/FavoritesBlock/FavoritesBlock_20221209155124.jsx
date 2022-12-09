import React from 'react'
import styles from './FavoritesBlock.module.scss'
const FavoritesBlock = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span>
        <img className={styles.favHeart} height src='/images/icons/romance-icon.svg' alt='favoriteIcon'></img>
        </span>
        <br />
      </h1>
      <p className={styles.description}>Unfortunately this page connot be found </p>
    </div>
  )
}

export default FavoritesBlock