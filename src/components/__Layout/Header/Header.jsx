import React from 'react';
import PageLinks from '@utils/const/PageLinks';
import LogoImg from '@assets/images/svg/logo.svg';
import MainMenu from '../../__Partials/MainMenu/MainMenu';
import Logo from '../../__Partials/Logo/Logo';

import './Header.scss';

class Header extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      menu: [
        PageLinks.home,
        PageLinks.about,
        PageLinks.portfolio,
        PageLinks.contacts,
      ],
    };
  }

  render() {
    const { menu } = this.state;
    return (
      <div className="app-header">
        <div className="page-wrapper">
          <div className="app-header__top">
            <div className="app-header__top-left">
              <Logo src={LogoImg} alt="" />
            </div>
            <div className="app-header__top-right">
              <MainMenu menu={menu} className="__header" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
