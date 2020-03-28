import React from 'react';
import PageLinks from '@utils/const/PageLinks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { LogoSvg } from '../../__Partials/SvgImage/SvgImage';
import MainMenu from '../../__Partials/MainMenu';
import Logo from '../../__Partials/Logo';

import './Header.scss';

class Header extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      mobileState: false,
      menu: [
        PageLinks.home,
        PageLinks.about,
        PageLinks.portfolio,
        PageLinks.contacts,
      ],
    };
  }

  toggleMobile = () => {
    this.setState((state) => ({ mobileState: !state.mobileState }));
  }

  render() {
    const { menu, mobileState } = this.state;

    const mobileMenu = mobileState ? (
      <div className="mobile-menu">
        <MainMenu menu={menu} className="__header mobile" />
        <div className="close">
          <FontAwesomeIcon icon={faTimes} onClick={this.toggleMobile} />
        </div>
      </div>
    ) : '';

    return (
      <div className="app-header">
        <div className="page-wrapper">
          <div className="app-header__top">
            <div className="app-header__top-left">
              <Logo>
                <LogoSvg />
              </Logo>
            </div>
            <div className="app-header__top-right">
              <MainMenu menu={menu} className="__header" />
              <div className="mobile-hamburger" onClick={this.toggleMobile}>
                <span />
                <span />
                <span />
              </div>
            </div>
            { mobileMenu }
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
