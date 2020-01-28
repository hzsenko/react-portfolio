import React from 'react';
import PropTypes from 'prop-types';

function AboutLabel({ className, label, children }) {
  return (
    <div className={className}>
      <div className="field-label">{label}</div>
      { children && <div className="field-text">{children}</div> }
    </div>
  );
}

AboutLabel.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  children: PropTypes.string,
};

AboutLabel.defaultProps = {
  className: '',
  children: '',
};

export default React.memo(AboutLabel);
