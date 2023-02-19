import React from "react";
import styles from "./dressBlock.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../redux/slices/cartSlice";

function DressBlock({ id, title, sizes, price, imageUrl }) {
  const [addToCart, setAddToCart] = React.useState(false);
  const [addToFav, setAddToFav] = React.useState(false);
  const dispatch = useDispatch();
  const [pickSize, setPickSize] = React.useState(0);

  const toggleAdd = () => {
    setAddToCart(!addToCart);
  };
  const toggleFav = () => {
    setAddToFav(!addToFav);
  };

  const onClickSize = (index) => {
    setPickSize(index);
  };
  const onClickAdd = () => {
    const item = {
      id,
      title,
      price,
      imageUrl,
      size: pickSize,
    };
    dispatch(addItem(item));
  };
  return (
    <div className={styles.dressWrap}>
      <div className={styles.dressBlock}>
        <img className={styles.dressImage} src={imageUrl} alt="Dress" />
        <h4 className={styles.dressTitle}>{title}</h4>
        <div className={styles.dressSelector}>
          <ul className={styles.ul}>
            {sizes.map((size, index) => (
              <li
                key={size}
                onClick={() => onClickSize(index)}
                className={pickSize === index ? styles["active"] : styles["li"]}
              >
                {size}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.dressBottom}>
          <div className={styles.dressPrice}>{price} $</div>
          <div className={styles.buttonContent}>
            <div>
              <img
                src={
                  addToFav
                    ? "/images/icons/heart-red.svg"
                    : "/images/icons/heart-empty.svg"
                }
                onClick={() => toggleFav()}
                alt="heart"
                className={styles.heartContent}
                width="20"
                height="20"
              ></img>
            </div>
            <div onClick={onClickAdd}>
              <img
                className={styles.plus}
                onClick={() => {
                  toggleAdd();
                }}
                width="18"
                height="18"
                src={
                  addToCart
                    ? "/images/icons/check-mark-icon.svg"
                    : "/images/icons/plus-icon.svg"
                }
                alt="plus"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DressBlock;
