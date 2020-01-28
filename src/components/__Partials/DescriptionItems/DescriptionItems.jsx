import React from 'react';
import PropTypes from 'prop-types';
import DescriptionItem from './DescriptionItem';

import './DescriptionItems.scss';

function DescriptionItems({ items }) {
  const elements = items.map((item, index) => (
    <DescriptionItem
      key={`description-item__${item.id}`}
      {...item}
      index={index}
    />
  ));

  return (
    <div className="description-items">
      {elements}
    </div>
  );
}

DescriptionItems.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default React.memo(DescriptionItems);
