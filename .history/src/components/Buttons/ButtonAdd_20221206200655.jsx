 import React, { useState } from 'react';

export const Button = () => {
  const [addToCart, setAddToCart] = useState(false);
  const [addToFav, setAddToFav] = useState(false);

  const toggleAdd = () => {
    setAddToCart(!addToCart);
  }
  const toggleFav = () => {
    setAddToFav(!addToFav);
  }

    return (
      <div className="button-content">
        <img
          src={addToFav ? }
          alt="heart"
          className="heart"
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

