 import React, { useState } from 'react';
import styles from './button.module.scss';

export const ButtonAdd = () => {
  const [addToCart, setAddToCart] = useState(false);
  const [addToFav, setAddToFav] = useState(false);

  const toggleAdd = () => {
    setAddToCart(!addToCart);
  }
  const toggleFav = () => {
    setAddToFav(!addToFav);
  }

    return (
      <div className={sty}>
        <img
          src={addToFav ?  '/images/icons/heart-red.svg' : '/images/icons/heart-empty.svg'}
          onClick={() => toggleFav()}
          alt="heart"
          className="heartContent"
          width="20"
          height="20"
        ></img>
        <img
          className="plus"
          onClick={() => {
            toggleAdd();
          }}
          width="18"
          height="18"
          src={addToCart ? '/images/icons/check-mark-icon.svg' : '/images/icons/plus-icon.svg'}
          alt="plus"
        ></img>
      </div>
    );
}

