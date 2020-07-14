import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick, disabled, desc, test }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    data-testid={test}
    type="button"
    aria-label="button"
  >
    {desc}
  </button>
);

export default Button;

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  test: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};
