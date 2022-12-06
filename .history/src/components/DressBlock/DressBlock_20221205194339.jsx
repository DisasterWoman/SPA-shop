import React from 'react';
import { Button } from '../Buttons/ButtonAdd';
import './_dress-block.scss';

function DressBlock({title, sizes, colors, imageUrl}) {
  const [pickSize, setPickSize] = React.useState(0);
  const [pickColor, setPickColor] = React.useState(0);

  const onClickSize = (index) => {
    setPickSize(index)
  }
  const onClickColor = (index) => {
    setPickColor(index)
  }
  return (
    <div className="dress-block">
      <img className="dress-block__image" src={imageUrl.image ? imageUrl.image.map((img) => img.image) : imageUrl} alt="Dress" />
      <h4 className="dress-block__title">{title}</h4>
      <div className="dress-block__selector">
        <ul>
          {colors?.map((color, index) => (
            <li onClick={() => onClickColor(index)} className={pickColor === index ? 'active' : ''}>
              {color}
            </li>
          ))}
        </ul>
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
        <Button />
      </div>
    </div>
  );
}

export default DressBlock;
