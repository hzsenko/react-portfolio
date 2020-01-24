import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

function Title({ className, children }) {
  return (
    <h1 className={classNames('h1', { [className]: className })}>
      {children}
    </h1>
  );
}

Title.propTypes = {
  className: PropTypes.string,
  children: PropTypes.arrayOf([
    PropTypes.string,
    PropTypes.node,
  ]),
};

Title.defaultProps = {
  className: '',
  children: '',
};

export default Title;
