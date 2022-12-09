import React from 'react';
import { Button, ButtonAdd } from './ButtonAdd';
import styles from './dress-block.module.scss'
function DressBlock({title, sizes, colors, imageUrl}) {
  const [pickSize, setPickSize] = React.useState(0);
  
  const onClickSize = (index) => {
    setPickSize(index)
  }
  console.log(imageUrl.image)
  return (
    <div className={styles.dressBlock}>
      <img className={sttles.dressImage} src={imageUrl} alt="Dress" />
      <h4 className="dressTitle">{title}</h4>
      <div className="dressSelector">
        <ul>
          {sizes.map((size, index) => (
            <li
              key={size}
              onClick={() => onClickSize(index)}
              className={pickSize === index ? 'active' : ''}
            >
              {size}
            </li>
          ))}
        </ul>
      </div>
      <div className="dressBottom">
        <div className="dressPrice">125 $</div>
        <ButtonAdd />
      </div>
    </div>
  );
}

export default DressBlock;
