import React from 'react';
import PageLinks from '@utils/const/PageLinks';
import MainMenu from '../../__Partials/MainMenu/MainMenu';

class Header extends React.Component {
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
              {/* logo */}
            </div>
            <div className="app-header__top-right">
              <MainMenu menu={menu} />
            </div>
          </div>
      </div>
      </div>
    );
  }
}

export default Header;
