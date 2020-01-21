import React from 'react';
import PropTypes from 'prop-types';
import PageLinkType from '@utils/types/PageLinkType';
import MainMenuItem from './MainMenuItem';

function MainMenu({ menu }) {
  const items = menu.map((item) => (
    <MainMenuItem
      href={item.href}
      key={item.id}
    >
      {item.text}
    </MainMenuItem>
  ));

  return (
    <div className="main-menu">
      {items}
    </div>
  );
}

MainMenu.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.shape(PageLinkType)).isRequired,
};

export default MainMenu;
