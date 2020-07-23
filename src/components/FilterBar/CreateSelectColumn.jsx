import React from 'react';
import PropTypes from 'prop-types';

const CreateSelectColumn = ({ onChange, value, options, filter }) => {
  let optionsFiltered = options;
  if (typeof filter && filter.length > 0) {
    filter.forEach(({ column }) => {
      optionsFiltered = optionsFiltered.filter((option) => option !== column);
    });
  }

  return (
    <select value={value} onChange={(e) => onChange(e)} data-testid="column-filter" id="column">
      <option value="">Column</option>
      {optionsFiltered.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};
CreateSelectColumn.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  filter: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default CreateSelectColumn;
