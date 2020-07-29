import React from 'react';
// import { connect } from 'react-redux';
// import { createStore } from 'redux';
import ByName from './FilterByName';
import FilterValue from './FilterByValue';

const Filters = () => (
  <div>
    <ByName />
    <FilterValue />
  </div>
);

export default Filters;
