import React, { Component } from 'react';
import FilterName from './FilterName';
import FilterNumValues from './FilterNumValues';
import RemoveFilter from './RemoveFilter';

export class Filters extends Component {
  render() {
    return (
      <div>
        Filtros
        <FilterName />
        <FilterNumValues />
        <RemoveFilter />
      </div>
    );
  }
}

export default Filters;
