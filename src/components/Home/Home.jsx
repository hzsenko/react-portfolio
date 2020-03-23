import React, { PureComponent } from 'react';
import Description from '@utils/const/Description';

import Title from '../__Partials/Title';
import Intro from '../__Partials/Intro';
import DescriptionItems from '../__Partials/DescriptionItems';

class Home extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      description: [
        Description.code,
        Description.tutorial,
        Description.about,
      ],
    };
  }

  render() {
    const { description } = this.state;

    return (
      <div className="app-home">
        <Title className="home-title">Привет!</Title>
        <Intro>
          <p>Меня зовут Сергей, и я front-end разработчик из Сибири.</p>
          <p>Этот сайт - моя домашняя страничка, где я размещаю свои работы и делюсь мыслями.</p>
          <p className="__subtitle">На этом сайте вы можете найти:</p>
        </Intro>
        <DescriptionItems items={description} />
      </div>
    );
  }
}

export default Home;
