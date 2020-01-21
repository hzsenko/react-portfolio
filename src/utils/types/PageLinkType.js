import PropTypes from 'prop-types';

export default {
  id: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  exact: PropTypes.bool,
};
