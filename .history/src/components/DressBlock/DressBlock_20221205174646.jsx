import React from 'react';
import { Button } from '../Buttons/ButtonAdd';
import './_dress-block.scss';

function DressBlock({title, sizes, colors}) {
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
      <img className="dress-block__image" src="/images/dresses/dress0-blue.webp" alt="Dress" />
      <h4 className="dress-block__title">{title}</h4>
      <div className="dress-block__selector">
        <ul>
          {colors?.map((color, inde) => (
            <li onClick={() => onClickColor(index)} className="active">
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
        <div className="dress-blockk__price">125 $</div>
        <Button />
      </div>
    </div>
  );
}

export default DressBlock;
