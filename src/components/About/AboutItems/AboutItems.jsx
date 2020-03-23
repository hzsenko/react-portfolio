import React from 'react';
import PropTypes from 'prop-types';

import AboutItem from '../AboutItem';

function AboutItems({ items }) {
  const elements = items.map((item) => (
    <AboutItem item={item} key={`about-item__${item.text}`} />
  ));

  return (
    <div className="field-items">
      {elements}
    </div>
  );
}

AboutItems.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default React.memo(AboutItems);
