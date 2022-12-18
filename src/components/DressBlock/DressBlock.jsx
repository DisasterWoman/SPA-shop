import React from 'react';
import { ButtonAdd } from './ButtonAdd';
import styles from './dressBlock.module.scss'
function DressBlock({title, sizes, colors,price,imageUrl}) {
  const [pickSize, setPickSize] = React.useState(0);
  
  const onClickSize = (index) => {
    setPickSize(index)
  }
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
                className={pickSize === index ? styles['active'] : styles['li']}
              >
                {size}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.dressBottom}>
          <div className={styles.dressPrice}>{price} $</div>
          <ButtonAdd/>
        </div>
      </div>
    </div>
  );
}

export default DressBlock;
