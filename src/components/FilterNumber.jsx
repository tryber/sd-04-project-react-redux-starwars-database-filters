import React from 'react';
import PropTypes from 'prop-types';

const FilterNumber = ({ onChange, value }) => (
  <input
    type="number"
    placeholder="Number"
    min="0"
    data-testid="value-filter"
    value={value}
    onChange={onChange}
  />
);

FilterNumber.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default FilterNumber;
