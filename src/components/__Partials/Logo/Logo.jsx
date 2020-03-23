import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './Logo.scss';

function Logo({ children }) {
  return (
    <div className="app-logo">
      <Link to="/">
        {children}
      </Link>
    </div>
  );
}

Logo.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node,
  ]).isRequired,
};

export default React.memo(Logo);
