import React from 'react';
import './_header.scss';
import { ButtonHeader } from './ButtonHeader';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <div className="header__logo">
            <img width="220" src="/dreamy-dress.png" alt="logo" />
            <div></div>
          </div>
        </Link>
        <div className="cart-wrap">
          <ButtonHeader />
        </div>
      </div>
    </div>
  );
}

export default Header;
