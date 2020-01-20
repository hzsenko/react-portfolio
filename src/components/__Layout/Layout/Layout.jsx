import React from 'react';
import PropTypes from 'prop-types';

function Layout({ children }) {
  return (
    <div className="app-layout">
      {children}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Layout;
