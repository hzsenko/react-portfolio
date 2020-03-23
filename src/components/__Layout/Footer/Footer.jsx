import React from 'react';
import SocialLinks from '@utils/const/SocialLinks';
import PageLinks from '@utils/const/PageLinks';
import Copyright from '../../__Partials/Copyright';
import Social from '../../__Partials/Social';
import MainMenu from '../../__Partials/MainMenu';

import './Footer.scss';

class Footer extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      socialItems: [
        SocialLinks.vk,
        SocialLinks.instagram,
        SocialLinks.github,
      ],
      menu: [
        PageLinks.home,
        PageLinks.about,
        PageLinks.portfolio,
        PageLinks.contacts,
      ],
    };
  }

  render() {
    const { socialItems, menu } = this.state;
    return (
      <div className="app-footer">
        <div className="page-wrapper">
          <div className="app-footer__top">
            <Social items={socialItems} />
          </div>
          <div className="app-footer__bottom">
            <MainMenu menu={menu} className="__footer" />
            <Copyright />
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
