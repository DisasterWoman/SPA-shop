import React from 'react';
import { Button } from '../Buttons/ButtonAdd';
import './_dress-block.scss';
import axios from 'axios';


function DressBlock() {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    axios.get('https://638caec6eafd555746abf518.mockapi.io/items').t
    return () => {
    };
  }, []);
  
  '
  return (
    <div className="dress-block">
      <img className="dress-block__image" src="/images/dresses/dress0-blue.webp" alt="Dress" />
      <h4 className="dress-block__title">Princess Dress</h4>
      <div className="dress-block__selector">
        <ul>
          <li className="active">blue</li>
          <li>black</li>
          <li>red</li>
        </ul>
        <ul>
          <li className="active">XS</li>
          <li>S</li>
          <li>M</li>
          <li>L</li>
          <li>XL</li>
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
