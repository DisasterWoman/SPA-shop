import React from 'react';
import './_header.scss';
import { ButtonHeader } from '../Buttons/';
function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="header__logo">
          <img width="220" src="/dreamy-dress.png" alt="logo" />
          <div></div>
        </div>
        <div className="header__cart">
          <ButtonHeader />
        </div>
      </div>
    </div>
  );
}

export default Header;
