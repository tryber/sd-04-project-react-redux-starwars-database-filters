import React from 'react';
import NameSearch from './NameSearch';
import NumericSearch from './NumericSearch';

const FilterBar = () => {
  return (
    <div>
      <h3>Filter Planets</h3>
      <NameSearch />
      <NumericSearch />
    </div>
  );
};

export default FilterBar;
