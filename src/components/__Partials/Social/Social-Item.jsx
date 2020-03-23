import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

function SocialItem({
  href,
  type,
  src,
}) {
  return (
    <div className={classNames('social__item', { [type]: type })}>
      {/* eslint-disable-next-line */}
      <a href={href} target="_blank">
        {src()}
      </a>
    </div>
  );
}

SocialItem.propTypes = {
  href: PropTypes.string.isRequired,
  type: PropTypes.string,
  src: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.element,
  ]).isRequired,
};

SocialItem.defaultProps = {
  type: '',
};

export default React.memo(SocialItem);
