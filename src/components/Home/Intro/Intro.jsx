import React from 'react';
import Emoji from '../../__Partials/Emoji/Emoji';

import './Intro.scss';

function Intro() {
  return (
    <div className="app-intro">
      <h1 className="intro-title">Hello there!
        <Emoji symbol="🤟" className="--rock" />
      </h1>
      <p className="intro-subtitle">
        My name is Sergey, and I&lsquo;m frontend developer from Siberia
        <Emoji symbol="❄️" className="--snow" />
      </p>
    </div>
  );
}

export default Intro;
