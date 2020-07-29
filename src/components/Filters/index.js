import React from 'react';
import ByName from './FilterByName';
import FilterValue from './FilterByValue';
import RemoveFilters from './RemoveFilters';

const Filters = () => (
  <div>
    <ByName />
    <FilterValue />
    <RemoveFilters />
  </div>
);

export default Filters;
