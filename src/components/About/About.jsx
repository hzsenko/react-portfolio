import React from 'react';
import Title from '../__Partials/Title/Title';
import Emoji from '../__Partials/Emoji/Emoji';

function About() {
  return (
    <div className="app-about">
      <Title className="about-title">
        Обо мне
        <Emoji symbol="😉" className="big --monocle" />
      </Title>
    </div>
  );
}

export default About;
