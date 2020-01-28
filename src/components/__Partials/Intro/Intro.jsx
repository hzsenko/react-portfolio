import React from 'react';
import PropTypes from 'prop-types';

import './Intro.scss';

function Intro({ children }) {
  return (
    <div className="app-intro">{children}</div>
  );
}

Intro.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.element,
  ]).isRequired,
};

export default React.memo(Intro);
