import React from 'react';

const FiltersList = ({ filters, filterDeletionHandler }) => filters.map((filter) => (
  <div data-testid="filter">
    <span>{filter.column}</span>
    <span>{filter.comparison}</span>
    <span>{filter.value}</span>
    <button type="button" onClick={() => filterDeletionHandler(filter)}>
      X
    </button>
  </div>
));

export default FiltersList;
