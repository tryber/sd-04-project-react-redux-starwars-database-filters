import React from 'react';
import FilterPlanets from './FilterPlanets';
import FilterValues from './FilterValues';
import FilterOrder from './FilterOrder';
import RemoveFilter from './FilterValues';

function Filters() {
  return (
    <div>
      <FilterPlanets />
      <FilterValues />
      <FilterOrder />
      <RemoveFilter />
    </div>
  );
}

export default Filters;
