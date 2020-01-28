import React from 'react';
import AboutInfo from '@utils/const/AboutInfo';

import sawing from '@assets/images/svg/about/sawing.svg';
import guitar from '@assets/images/svg/about/guitar.svg';

import Title from '../__Partials/Title/Title';
import Button from '../__Partials/Button/Button';
import AboutLabel from './AboutLabel/AboutLabel';
import AboutItems from './AboutItems/AboutItems';

import './About.scss';

class About extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      name: AboutInfo.name,
      status: AboutInfo.status,
      image: AboutInfo.image,
      otherStatus: AboutInfo.otherStatus,
      technologies: AboutInfo.technologies,
    };
  }

  render() {
    const {
      name,
      status,
      image,
      otherStatus,
      technologies,
    } = this.state;

    return (
      <div className="app-about">
        <Title className="about-title">Обо мне</Title>
        <div className="about-container">
          <div className="about-image">
            <img src={image} alt="" />
            <Button className="about-button">Написать</Button>
          </div>
          <div className="about-info">
            <div className="about-info__title">{name}</div>
            <AboutLabel className="about-info__field" label="Специализация">
              {status}
            </AboutLabel>
            <AboutLabel className="info__field" label="Любимые технологии" />
            <AboutItems items={technologies} />
            <AboutLabel className="about-info__field" label="Другая сторона">
              {otherStatus}
            </AboutLabel>
            <AboutLabel className="about-info__field" label="Интересы" />
            <div className="field-items">
              <div className="field-item">
                <div className="field-item__img">
                  <img src={sawing} alt="" />
                </div>
                <div className="field-item__text">
                  Столярное дело
                </div>
              </div>
              <div className="field-item">
                <div className="field-item__img">
                  <img src={guitar} alt="" />
                </div>
                <div className="field-item__text">
                  Музыка
                </div>
              </div>
              <div className="field-item">
                <div className="field-item__img">
                  <img src={sawing} alt="" />
                </div>
                <div className="field-item__text">
                  Спорт
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
