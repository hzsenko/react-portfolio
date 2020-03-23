import React from 'react';
import AboutInfo from '@utils/const/AboutInfo';

import Title from '../__Partials/Title';
import Button from '../__Partials/Button';
import AboutLabel from './AboutLabel';
import AboutItems from './AboutItems';

import './About.scss';

class About extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      name: AboutInfo.name,
      status: AboutInfo.status,
      otherStatus: AboutInfo.otherStatus,
      technologies: AboutInfo.technologies,
      interests: AboutInfo.interests,
    };
  }

  render() {
    const {
      name,
      status,
      otherStatus,
      technologies,
      interests,
    } = this.state;

    return (
      <div className="app-about">
        <Title className="about-title">Обо мне</Title>
        <div className="about-container">
          <div className="about-image">
            <div className="about-image-main" />
            <Button className="about-button">Написать</Button>
          </div>
          <div className="about-info">
            <div className="about-info__title">{name}</div>
            <AboutLabel className="about-info__field" label="Специализация">{status}</AboutLabel>
            <AboutLabel className="info__field" label="Любимые технологии" />
            <AboutItems items={technologies} />
            <AboutLabel className="about-info__field" label="Другая сторона">{otherStatus}</AboutLabel>
            <AboutLabel className="about-info__field" label="Интересы" />
            <AboutItems items={interests} />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
