import React from 'react'
import styles from './CartEmpty.module.scss';
const CartEmpty = () => {
  return (
    
      <div className={styles.root}>
        <h1>
          <span>
            <img
              className={styles.favHeart}
              height={64}
              src="/images/icons/romance-icon.svg"
              alt="favoriteIcon"
            ></img>
          </span>
          <br />
        </h1>
        <h2 className={styles.description}>Your favorites is empty </h2>
        <p>Explore items in our shop and add them to favorites to see them here.</p>
      </div>
    </div>
  );
}

export default CartEmpty