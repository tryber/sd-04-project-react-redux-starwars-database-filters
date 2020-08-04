import React from 'react';
import ByName from './FilterByName';
import FilterValue from './FilterByValue';
import RemoveFilters from './RemoveFilters';
import Order from './Order';

const Filters = () => (
  <div>
    <ByName />
    <FilterValue />
    <RemoveFilters />
    <Order />
  </div>
);

export default Filters;
