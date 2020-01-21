import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import PageLinkType from '@utils/types/PageLinkType';
import MainMenuItem from './MainMenuItem';

import './MainMenu.scss';

function MainMenu({ menu, className }) {
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
    <div className={classNames('app-menu', { [className]: className })}>
      {items}
    </div>
  );
}

MainMenu.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.shape(PageLinkType)).isRequired,
  className: PropTypes.string,
};

MainMenu.defaultProps = {
  className: '',
};

export default MainMenu;
