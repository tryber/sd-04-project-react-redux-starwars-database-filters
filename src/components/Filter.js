import React from 'react';
import RemoveFilter from './Filter/RemoveFilter';
import FilterOrder from './Filter/Order';
import SearchComponent from './Filter/searchComponent';
import NumericFilter from './Filter/numericFilter';

function Filters() {
  return (
    <div>
      <SearchComponent />
      <FilterOrder />
      <NumericFilter />
      <RemoveFilter />
    </div>
  );
}

export default Filters;
