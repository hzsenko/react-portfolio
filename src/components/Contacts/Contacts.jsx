import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegramPlane } from '@fortawesome/free-brands-svg-icons';
import { faPhoneAlt, faAt } from '@fortawesome/free-solid-svg-icons';
import Title from '../__Partials/Title';
import Intro from '../__Partials/Intro';

import './Contacts.scss';

function Contacts() {
  return (
    <div className="app-contacts">
      <Title className="about-title">Как со мной связаться?</Title>
      <Intro><p>Здесь Вы всегда можете связаться со мной, любым удобным для вас путем.</p></Intro>
      <div className="feedback-icons">
        <p className="feedback-icons__item">
          {/* eslint-disable-next-line */}
          <a href="https://t-do.ru/hzsenko1" target="_blank">
            <FontAwesomeIcon icon={faTelegramPlane} />
            <span>Telegram</span>
          </a>
        </p>
        <p className="feedback-icons__item">
          {/* eslint-disable-next-line */}
          <a href="mailto:hzsenko@mail.ru" target="_blank">
            <FontAwesomeIcon icon={faAt} />
            <span>E-mail</span>
          </a>
        </p>
        <p className="feedback-icons__item">
          {/* eslint-disable-next-line */}
          <a href="tel:+79537655914">
            <FontAwesomeIcon icon={faPhoneAlt} />
            <span>Phone</span>
          </a>
        </p>
      </div>
      <Intro><p>Также я всегда рад получать от Вас обратную связь по сайту!</p></Intro>
    </div>
  );
}

export default React.memo(Contacts);
