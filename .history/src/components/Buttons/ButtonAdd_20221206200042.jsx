 import React, { useState } from 'react';

export const Button = () => {
  const [addToCart, setAddToCart] = useState(false);

  const toggleAdd = () => {
    setAddToCart(!addToCart);
  }

    return (
      <div className="button-content" onClick={() => {
        toggleAdd();
      }}>
       <img src='../../../'>
       </img>
        <img
          className="plus"
          width="15"
          height="15"
          src={addToCart ? '/images/icons/check-mark-icon.svg' : '/images/icons/plus-icon.svg'}
          onClick={toggleAdd}
          alt="plus"
        ></img>
      </div>
    );
}

