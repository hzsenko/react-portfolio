import React from 'react';
import spinner from '@assets/images/spinner.gif';

import './Spinner.scss';

function Spinner() {
  return (
    <div className="spinner">
      <img src={spinner} alt="spinner" />
    </div>
  );
}

export default React.memo(Spinner);
