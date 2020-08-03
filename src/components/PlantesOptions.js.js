import React from 'react';
import options from '../service/planets';

const PlanetsOptions = ({onChange}) => {
  return (
    <select
      name="column"
      data-testid="column-sort"
      onChange={onChange}
    >
      <option>Ordem</option>
      {options.map((opt) => (
        <option>{opt}</option>
      ))}
    </select>
  );
};

export default PlanetsOptions;
