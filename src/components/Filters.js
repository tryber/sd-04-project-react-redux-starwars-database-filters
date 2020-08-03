import React, { Component } from 'react';
import FilterName from './FilterName';
import FilterNumValues from './FilterNumValues';
import RemoveFilter from './RemoveFilter';
import ColumnOrder from './ColumnOrder';

export class Filters extends Component {
  render() {
    return (
      <div>
        Filtros
        <FilterName />
        <FilterNumValues />
        <RemoveFilter />
        <ColumnOrder />
      </div>
    );
  }
}

export default Filters;
