import React from 'react';
import NameSearch from './NameSearch';
import NumericSearch from './NumericSearch';
import FiltersApplied from './FiltersApplied';
import Order from './Order';

const FilterBar = () => (
  <header className="header-content">
    <h3>Filter Star Wars Planets</h3>
    <NameSearch />
    <NumericSearch />
    <FiltersApplied />
    <Order />
  </header>
);

export default FilterBar;
