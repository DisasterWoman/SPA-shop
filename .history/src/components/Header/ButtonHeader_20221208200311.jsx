import './_header.scss';
import styles from './button.module.scss';
import { Link } from 'react-router-dom';


export const ButtonHeader = () => {
  return (
    <Link  className={styles.buttonCart}>
      <span className={styles.span}>520 ₽</span>
      <div className={styles.buttonDelimiter}></div>
      <img className={styles.cart} alt="cart" src="/images/icons/cart-icon.svg"></img>
      <div className={styles.buttonDelimiter}></div>
    </Link>
    <Link>
    
    </Link>
  );
};