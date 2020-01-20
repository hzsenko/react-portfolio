import React from 'react';
import PropTypes from 'prop-types';

function Header({ children }) {
  return (
    <div className="app-header">
      {children}
    </div>
  );
}

Header.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Header;
