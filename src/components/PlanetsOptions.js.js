import React from 'react';
import PropTypes from 'prop-types';
import options from '../service/planets';

const PlanetsOptions = ({ onChange }) => (
  <select name="column" data-testid="column-sort" onChange={onChange}>
    <option>Ordem</option>
    {options.map((opt) => (
      <option>{opt}</option>
    ))}
  </select>
);

PlanetsOptions.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default PlanetsOptions;
