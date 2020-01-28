import React from 'react';
import PropTypes from 'prop-types';

function DescriptionItem({
  text,
  src,
  index,
}) {
  return (
    <div className="description-item">
      <div className="description-item">
        <div className="description-item__num">{index + 1}</div>
        <div className="description-item__img">
          <img src={src} alt="" />
        </div>
        <div className="description-item__text">{text}</div>
      </div>
    </div>
  );
}

DescriptionItem.propTypes = {
  text: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default React.memo(DescriptionItem);
