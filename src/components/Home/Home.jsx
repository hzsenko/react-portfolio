import React from 'react';
import Intro from '../__Partials/Intro/Intro';
import Title from '../__Partials/Title/Title';

function Home() {
  return (
    <div className="app-home">
      <Title className="home-title">Привет!</Title>
      <Intro>
        <p>Меня зовут Сергей, и я front-end разработчик из Сибири</p>
      </Intro>
    </div>
  );
}

export default Home;
