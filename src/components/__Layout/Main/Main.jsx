import React from 'react';
import PropTypes from 'prop-types';

import './Main.scss';

function Main({ children }) {
  return (
    <div className="app-main">
      {children}
    </div>
  );
}

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default React.memo(Main);
