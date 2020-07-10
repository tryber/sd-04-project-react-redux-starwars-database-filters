import React from 'react';
import NameSearch from './NameSearch';
import NumericSearch from './NumericSearch';

const FilterBar = () => (
  <header>
    <h3>Filter Planets</h3>
    <NameSearch />
    <NumericSearch />
  </header>
);

export default FilterBar;
