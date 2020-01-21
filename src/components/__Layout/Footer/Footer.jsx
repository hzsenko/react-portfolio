import React from 'react';

import './Footer.scss';
import Copyright from '../../__Partials/Copyright/Copyright';

function Footer() {
  return (
    <div className="app-footer">
      <div className="page-wrapper">
        <div className="app-footer__top">
          {/* Social */}
        </div>
        <div className="app-footer__bottom">
          {/* Menu */}
          <Copyright />
        </div>
      </div>
    </div>
  );
}

export default Footer;
