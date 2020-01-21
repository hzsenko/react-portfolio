import React from 'react';
import PropTypes from 'prop-types';
import PageLinkType from '@utils/types/PageLinkType';
import MainMenuItem from './MainMenuItem';

import './MainMenu.scss';

function MainMenu({ menu }) {
  const items = menu.map(({
    href,
    id,
    text,
    ...other
  }) => (
    <MainMenuItem
      href={href}
      key={id}
      {...other}
    >
      {text}
    </MainMenuItem>
  ));

  return (
    <div className="app-menu">
      {items}
    </div>
  );
}

MainMenu.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.shape(PageLinkType)).isRequired,
};

export default MainMenu;
