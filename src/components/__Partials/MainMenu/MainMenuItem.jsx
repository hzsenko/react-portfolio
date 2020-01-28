import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

function MainMenuItem({ children, href, exact }) {
  return (
    <div className="app-menu__item">
      <NavLink
        to={href}
        activeClassName="_active"
        exact={exact}
      >
        {children}
      </NavLink>
    </div>
  );
}

MainMenuItem.propTypes = {
  children: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  exact: PropTypes.bool,
};

MainMenuItem.defaultProps = {
  exact: false,
};

export default React.memo(MainMenuItem);
