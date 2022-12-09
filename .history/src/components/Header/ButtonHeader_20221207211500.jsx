import './_header.scss';
import styles from './button.module.scss';
export const ButtonHeader = () => {
  return (
    <a href="/cart.html" className={styles.buttoncart}>
      <span>520 ₽</span>
      <div className="button-delimiter"></div>
      <img className="cart" alt="cart" src="/images/icons/cart-icon.svg"></img>
      <div className="button-delimiter"></div>
      <img className="heart" alt="heart" src="/images/icons/heart-empty.svg"></img>
    </a>
  );
};
