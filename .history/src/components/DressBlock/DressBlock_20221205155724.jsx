import React from 'react';
import { Button } from '../Buttons/ButtonAdd';
import './_dress-block.scss';

function DressBlock({title, sizes}) {
  const [pickSize, setPickSize] = React.useState(0);

  const onClickSize = (index) => {
    setPickSize(index)
  }

  console.log(sizes)
  return (
    <div className="dress-block">
      <img className="dress-block__image" src="/images/dresses/dress0-blue.webp" alt="Dress" />
      <h4 className="dress-block__title">{title}</h4>
      <div className="dress-block__selector">
        <ul>
          <li onC className="active">blue</li>
          <li>black</li>
          <li>red</li>
        </ul>
        <ul>
        {sizes.map((item, index) => (
            <li className="active">XS</li>
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
