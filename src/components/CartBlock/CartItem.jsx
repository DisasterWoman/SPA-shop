import React from 'react';
import styles from './cartItem.module.scss';

const CartItem = () => {

  return (
    <div>
      <div className={styles.topWrap}>
        <h3 className={styles.cartHeading}>Shopping Cart</h3>
        <h5 className={styles.cartRemoveAll}>Remove all</h5>
      </div>
      <div className={styles.cartBlock}>
        <div className={styles.cartWrap}>
          <div className={styles.cartItems}>
            <div className={styles.imageBox}>
              <div className={styles.box}>
                <img
                  className={styles.cartImg}
                  src="/images/dresses/dress11.jpg"
                  width={60}
                  alt=""
                />
              </div>
            </div>
            <div className={styles.about}>
              <h1 className={styles.title}>Apple Juice</h1>
              <p>Size: X</p>
              <img src="" alt="" />
            </div>
            <div className={styles.counter}></div>
            <div className={styles.prices}></div>
          </div>
          <div className={styles.cartItems}>
            <div className={styles.imageBox}>
              <div className={styles.box}>
                <img
                  className={styles.cartImg}
                  src="/images/dresses/dress9.jpg"
                  width={60}
                  alt=""
                />
              </div>
            </div>
            <div className={styles.about}>
              <h1 className={styles.title}>Apple Juice</h1>
              <div></div>
            </div>
            <div className={styles.counter}></div>
            <div className={styles.prices}></div>
          </div>
        </div>
        <div className={styles.checkoutBlock}>
          <h1 className={styles.title}>Total Price: </h1>
          <div className={styles.delimiter}></div>
          <div className={styles.checkout}>
            <h4>Total: </h4>
            <h4> 520 ₽ </h4>
          </div>
          <button className={styles.checkoutBtn}>Buy</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
