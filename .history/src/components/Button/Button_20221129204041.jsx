import React, { useState } from 'react';

export const Button = () => {
  const [addToCart, setAddToCart] = useState(false);
  const [itemCount, setItemCount] = useState(0);

  const toggleAdd = () => {
    setAddToCart(!addToCart);
  }
  const count = () => {
    setItemCount(itemCount + 1);
  }
    return (
      <div className="button button--outline button--add">
        <img
          className="plus"
          width="15"
          height="15"
          src={addToCart ? '/images/icons/check-mark-icon.svg' : '/images/icons/plus-icon.svg'}
          onClick={toggleAdd}
          alt="plus"
        ></img>
        <span>Add</span>
        <i onClick={count}>{itemCount}</i>
      </div>
    );
}