import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

function Emoji({ label, symbol, className }) {
  return (
    <span
      className={classNames('emoji', { [className]: className })}
      role="img"
      aria-label={label || ''}
      aria-hidden={label ? 'false' : 'true'}
    >
      {symbol}
    </span>
  );
}

Emoji.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  symbol: PropTypes.string.isRequired,
};

Emoji.defaultProps = {
  label: '',
  className: '',
};

export default React.memo(Emoji);
