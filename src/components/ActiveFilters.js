import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from './utilityComponents/Button';
import { removeFilter } from '../actions';

const ActiveFilters = ({ filterByNumericValues, removeFilterProp }) => (
  <div>
    {filterByNumericValues.map((filter) => (
      <div data-testid="filter" key={filter.column}>
        <p>{`${filter.column} ${filter.comparison} ${filter.value}`}</p>
        <Button onClick={() => removeFilterProp(filter.column)} desc="X" />
      </div>
    ))}
  </div>
);

const mapState = (state) => {
  const { filterByNumericValues } = state.filters;
  return {
    filterByNumericValues,
  };
};

const mapDispatch = {
  removeFilterProp: removeFilter,
};

export default connect(mapState, mapDispatch)(ActiveFilters);

ActiveFilters.propTypes = {
  filterByNumericValues: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.object]),
  ).isRequired,
  removeFilterProp: PropTypes.func.isRequired,
};
