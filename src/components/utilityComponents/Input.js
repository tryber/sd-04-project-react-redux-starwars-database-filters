import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ onChange, value, name, type, test }) => (
  <input
    onChange={onChange}
    value={value}
    name={name}
    type={type}
    data-testid={test}
  />
);

export default Input;

Input.defaultProps = {
  type: 'text',
};

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  test: PropTypes.string.isRequired,
};
