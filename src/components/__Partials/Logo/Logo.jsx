import React from 'react';
import PropTypes from 'prop-types';

import './Logo.scss';

function Logo({ src, alt }) {
  return (
    <div className="app-logo">
      <img src={src} alt={alt} />
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
