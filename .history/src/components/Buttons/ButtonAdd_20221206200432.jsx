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
      <div
        className="button-content"
        onClick={() => {
          toggleAdd();
        }}
      >
        <img
          src="/images/icons/heart-empty.svg"
          alt="heart"
          className="heart"
          width="18"
          height="18"
        ></img>
        <img
          className="plus"
          width="18"
          height="18"
          src={addToCart ? '/images/icons/check-mark-icon.svg' : '/images/icons/plus-icon.svg'}
          onClick={toggleAdd}
          alt="plus"
        ></img>
      </div>
    );
}

