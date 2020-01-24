import React from 'react';
import Intro from './Intro/Intro';
import Title from '../__Partials/Title/Title';
import Emoji from '../__Partials/Emoji/Emoji';

function Home() {
  return (
    <div className="app-home">
      <Title className="home-title">
        Hello there!
        <Emoji symbol="🤟" className="--rock" />
      </Title>
      <Intro />
    </div>
  );
}

export default Home;
