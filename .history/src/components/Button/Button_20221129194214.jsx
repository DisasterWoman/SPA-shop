import React, { useState } from 'react';

export const Button = () => {
  const [addToCart, setAddToCart] = useState(false);

  const onAddToCart = () => {
    setAddToCart(true)
  }
    return (
      <div className="button button--outline button--add">
      <img  className="plus" 
            width='15'
            height='15' 
            src={addToCart ? "/images/icons/plus-icon.svg" }
            alt="plus"
            >
            </img>
        <span>Add</span>
        <i>2</i>
      </div>
    );
}