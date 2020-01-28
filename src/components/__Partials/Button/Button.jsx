import React from 'react';
import PropTypes from 'prop-types';

function Button({ className, children }) {
  return (
    <div className={className}>
      <button type="submit" className="btn">{children}</button>
    </div>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string.isRequired,
};

Button.defaultProps = {
  className: '',
};

export default React.memo(Button);
