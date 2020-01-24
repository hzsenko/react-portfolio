import React from 'react';

import './Burger.scss';

function Burger() {
  return (
    <div className="menu-hamburger">
      <div className="menu-hamburger__wrapper">
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}

export default React.memo(Burger);
