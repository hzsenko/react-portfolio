import React from 'react';

import sawing from '@assets/images/svg/about/sawing.svg';
import guitar from '@assets/images/svg/about/guitar.svg';
import superpower from '@assets/images/svg/about/superpower.svg';

import Title from '../__Partials/Title/Title';

import './About.scss';

function About() {
  return (
    <div className="app-about">
      <Title className="about-title">
        Обо мне
      </Title>
      <div className="about-container">
        <div className="about-image">
          <img src={superpower} alt="" />
          <div className="about-button">
            <button type="submit">Написать</button>
          </div>
        </div>
        <div className="about-info">
          <div className="about-info__title">Zakharov Sergey</div>
          <div className="about-info__field">
            <div className="field-label">Специализация</div>
            <div className="field-text">Я занимаюсь frontend-разработкой</div>
          </div>
          <div className="about-info__field">
            <div className="field-label">
              Любимые технологии
            </div>
          </div>
          <div className="field-items">
            <div className="field-item">
              <div className="field-item__img">
                <img src={guitar} alt="" />
              </div>
              <div className="field-item__text">
                React
              </div>
            </div>
            <div className="field-item">
              <div className="field-item__img">
                <img src={guitar} alt="" />
              </div>
              <div className="field-item__text">
                JS
              </div>
            </div>
            <div className="field-item">
              <div className="field-item__img">
                <img src={guitar} alt="" />
              </div>
              <div className="field-item__text">
                NodeJS
              </div>
            </div>
            <div className="field-item">
              <div className="field-item__img">
                <img src={guitar} alt="" />
              </div>
              <div className="field-item__text">
                JS
              </div>
            </div>
          </div>
          <div className="about-info__field">
            <div className="field-label">Другая сторона</div>
            <div className="field-text">
              Помимо разработки, я занимаюсь музыкой, играю на гитаре, пишу музыку и песни.
              Также я занимаюсь столярным искусством и мастерю из дерева.
            </div>
          </div>
          <div className="about-info__field">
            <div className="field-label">Интересы</div>
          </div>
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

export default About;
