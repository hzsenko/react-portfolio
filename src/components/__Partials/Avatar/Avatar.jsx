import React from 'react';

import './Avatar.scss';

function Avatar() {
  return (
    <div className="avatar">
      <div className="avatar-main" />
    </div>
  );
}

export default React.memo(Avatar);
