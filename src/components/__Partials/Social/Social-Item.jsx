import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';


function SocialItem({
  href,
  type,
  src,
  text,
}) {
  return (
    <div className={classNames('social__item', { [type]: type })}>
      {/* eslint-disable-next-line */}
      <a href={href} target="_blank">
        <img src={src} alt={text} />
      </a>
    </div>
  );
}

SocialItem.propTypes = {
  href: PropTypes.string.isRequired,
  type: PropTypes.string,
  src: PropTypes.string.isRequired,
  text: PropTypes.string,
};

SocialItem.defaultProps = {
  type: '',
  text: '',
};

export default React.memo(SocialItem);
