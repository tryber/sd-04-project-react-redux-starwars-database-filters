import React from 'react';
import PropTypes from 'prop-types';

const CreateSelectColumn = ({ onChange, value, options }) => (
  <select value={value} onChange={(e) => onChange(e)} data-testid="column-filter" id="column">
    <option value="">Column</option>
    {options.map((option) => (
      <option key={option} value={option}>
        {option}
      </option>
    ))}
  </select>
);

CreateSelectColumn.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default CreateSelectColumn;
