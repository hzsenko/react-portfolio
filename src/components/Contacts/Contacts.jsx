import React from 'react';
import Emoji from '../__Partials/Emoji/Emoji';
import Title from '../__Partials/Title/Title';

function Contacts() {
  return (
    <div className="app-contacts">
      <Title className="about-title">
        Как со мной связаться?
        <Emoji symbol="☎️" className="big --phone" />
      </Title>
    </div>
  );
}

export default Contacts;
