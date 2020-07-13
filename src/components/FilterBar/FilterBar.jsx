import React from 'react';
import NameSearch from './NameSearch';
import NumericSearch from './NumericSearch';
import FiltersApplied from './FiltersApplied';

const FilterBar = () => (
  <header className="header-content">
    <h3>Filter Planets</h3>
    <NameSearch />
    <NumericSearch />
    <FiltersApplied />
  </header>
);

export default FilterBar;
