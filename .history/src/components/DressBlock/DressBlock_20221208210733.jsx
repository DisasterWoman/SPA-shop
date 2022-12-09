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
    <div className={}>
      <img className="dressImage" src={imageUrl} alt="Dress" />
      <h4 className="dress-block__title">{title}</h4>
      <div className="dress-block__selector">
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
      <div className="dress-block__bottom">
        <div className="dress-block__price">125 $</div>
        <ButtonAdd/>
      </div>
    </div>
  );
}

export default DressBlock;
