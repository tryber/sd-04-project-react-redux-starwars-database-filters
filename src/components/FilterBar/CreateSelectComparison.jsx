import React from 'react';
import PropTypes from 'prop-types';

const CreateSelectComparison = ({ handleChange, value }) => (
  <select
    value={value}
    onChange={(e) => handleChange(e)}
    data-testid="comparison-filter"
    id="comparison"
  >
    <option defaultValue>Comparison</option>
    <option value="maior que">maior que</option>
    <option value="igual a">igual a</option>
    <option value="menor que">menor que</option>
  </select>
);

CreateSelectComparison.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default CreateSelectComparison;
