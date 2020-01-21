import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';


function SocialItem({ href, type }) {
  return (
    <div className={classNames('social__item', { [type]: type })}>
      {/* eslint-disable-next-line */}
      <a href={href} target="_blank"/>
    </div>
  );
}

SocialItem.propTypes = {
  href: PropTypes.string.isRequired,
  type: PropTypes.string,
};

SocialItem.defaultProps = {
  type: '',
};

export default SocialItem;
