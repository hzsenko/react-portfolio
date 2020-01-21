import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function MainMenuItem({ children, href }) {
  return (
    <div className="menu-item">
      <Link to={href}>{children}</Link>
    </div>
  );
}

MainMenuItem.propTypes = {
  children: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default MainMenuItem;
