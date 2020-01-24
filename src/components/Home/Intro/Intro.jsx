import React from 'react';
import Emoji from '../../__Partials/Emoji/Emoji';

import './Intro.scss';

function Intro() {
  return (
    <div className="app-intro">
      <p className="intro-subtitle">
        Меня зовут Сергей, и я front-end разработчик из Сибири
        <Emoji symbol="❄️" className="--snow" />
      </p>
    </div>
  );
}

export default Intro;
