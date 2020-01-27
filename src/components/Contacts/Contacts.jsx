import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegramPlane, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faAt } from '@fortawesome/free-solid-svg-icons';

import Title from '../__Partials/Title/Title';
import Intro from '../__Partials/Intro/Intro';

import './Contacts.scss';

function Contacts() {
  return (
    <div className="app-contacts">
      <Title className="about-title">Как со мной связаться?</Title>
      <Intro><p>Здесь Вы всегда можете связаться со мной, любым удобным для вас путем.</p></Intro>
      <div className="feedback-icons">
        <p className="feedback-icons__item">
          <a href="#">
            <FontAwesomeIcon icon={faTelegramPlane} />
            <span>Telegram</span>
          </a>
        </p>
        <p className="feedback-icons__item">
          <a href="#">
            <FontAwesomeIcon icon={faAt} />
            <span>E-mail</span>
          </a>
        </p>
        <p className="feedback-icons__item">
          <a href="#">
            <FontAwesomeIcon icon={faWhatsapp} />
            <span>What&rsquo;sapp</span>
          </a>
        </p>
      </div>

      <Intro><p>Также я всегда рад получать от Вас обратную связь по сайту!</p></Intro>
    </div>
  );
}

export default Contacts;
