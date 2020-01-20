import React from 'react';
import PropTypes from 'prop-types';

function Footer({ children }) {
  return (
    <div className="app-footer">
      {children}
    </div>
  );
}

Footer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Footer;
