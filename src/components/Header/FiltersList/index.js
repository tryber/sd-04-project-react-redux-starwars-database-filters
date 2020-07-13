import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import FilterItem from './FilterItem';

const FiltersList = ({ filterByNumericValues }) => (
  <div>
    Filtros:
    {filterByNumericValues.map((filter) => <FilterItem key={filter.column} filter={filter} />)}
  </div>
);

FiltersList.propTypes = {
  filterByNumericValues: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = ({ filters: { filterByNumericValues } }) => ({
  filterByNumericValues,
});

export default connect(mapStateToProps)(FiltersList);
