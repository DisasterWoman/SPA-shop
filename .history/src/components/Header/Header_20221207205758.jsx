import React from 'react';
import './_header.scss';
import { ButtonHeader } from '../Buttons/ButtonHeader';
function Header() {
  return (
    <div className="header">
      <div className="container">

        <div className="cart-wrap">
          <ButtonHeader />
        </div>
      </div>
    </div>
  );
}

export default Header;
