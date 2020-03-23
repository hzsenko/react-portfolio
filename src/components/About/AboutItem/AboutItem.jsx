import React from 'react';
import PropTypes from 'prop-types';

function AboutItem({ item }) {
  return (
    <div className="field-item">
      <div className="field-item__img">
        {item.img()}
      </div>
      <div className="field-item__text">{item.text}</div>
    </div>
  );
}

AboutItem.propTypes = {
  item: PropTypes.shape({
    img: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};

export default React.memo(AboutItem);
