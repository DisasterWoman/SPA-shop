import React from 'react';
import './_header.scss';
import { ButtonHeader } from '../Buttons/ButtonHeader';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div className="header">
      <div className="container">
      <Link to="/">
      
      </Link>
        <div className="cart-wrap">
          <ButtonHeader />
        </div>
      </div>
    </div>
  );
}

export default Header;
