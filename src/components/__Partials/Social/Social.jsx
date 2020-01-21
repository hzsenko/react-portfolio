import React from 'react';
import PropTypes from 'prop-types';
import SocialLinkType from '@utils/types/SocialLinkType';
import SocialItem from './Social-Item';

function Social({ items }) {
  const elements = items.map((item) => (
    <SocialItem {...item} />
  ));
  return (
    <div className="social">{elements}</div>
  );
}

Social.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(SocialLinkType)).isRequired,
};

export default React.memo(Social);
