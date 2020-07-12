import React from 'react';
import PropTypes from 'prop-types';

const Select = ({ onChange, options, value, name, test }) => (
  <select name={name} onChange={onChange} value={value} data-testid={test}>
    <option aria-label="empty" />
    {options.map((category) => (
      <option key={category} value={category}>
        {category}
      </option>
    ))}
  </select>
);

export default Select;

Select.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string]))
    .isRequired,
  test: PropTypes.string.isRequired,
};
