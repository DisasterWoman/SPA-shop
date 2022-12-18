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
              <img className={styles.cartImg} src="/images/dresses/dress9.jpg" width={60} alt="" />
            </div>
            <div className={styles.infoLeft}>
              <div className={styles.about}>
                <h1 className={styles.title}>Apple Juice</h1>
                <p className={styles.size}>Size: X</p>
                <div className={styles.prices}>
                  <h4 className={styles.before}>3500 $</h4>
                  <h5 className={styles.after}>2500 $</h5>
                </div>
                <button className={styles.btn}>Buy</button>
              </div>
              <div className={styles.infoRight}>
                <img
                  className={styles.trash}
                  src="/images/icons/trash-can-icon.svg"
                  width={14}
                  alt="trash"
                />
                <div className={styles.counterWrap}>
                  <div className={styles.counter}>
                    <div className={styles.plus}>
                      <p>+</p>
                    </div>
                    <span>1</span>
                    <div className={styles.minus}>
                      <p>-</p>
                    </div>
                  </div>
                </div>
              </div>
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
