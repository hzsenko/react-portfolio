import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './Logo.scss';

function Logo({ src, alt }) {
  return (
    <div className="app-logo">
      <Link to="/">
        <img src={src} alt={alt} />
      </Link>
    </div>
  );
}

Logo.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

Logo.defaultProps = {
  alt: '',
};

export default React.memo(Logo);
