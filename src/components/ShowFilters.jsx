import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { deleteNumericFilter } from '../actions/filters';

const deletFilter = async (numberFilters, updateFilter, column) => {
  numberFilters.forEach((filter, index) => {
    if (filter.column === column) {
      numberFilters.splice(index, 1);
    }
  });
  await updateFilter(numberFilters);
};
const ShowFilters = ({ filterByNumberState, deleteFilterProps }) => (

  <ul>
    {filterByNumberState.map((option) => (
      <li id={option.column} data-testid="filter" key={option.column}>
        {option.column}
            :
        {option.value}
        <button
          type="button"
          onClick={(e) => {
            deletFilter(filterByNumberState,
              deleteFilterProps,
              option.column,
              e);
          }}
        >
        X
        </button>
      </li>
    ))}
  </ul>
);


const mapStateToProps = (state) => ({
  filterByNumberState: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  deleteFilterProps: (e) => dispatch(deleteNumericFilter(e)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ShowFilters);

ShowFilters.propTypes = {
  filterByNumberState: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteFilterProps: PropTypes.func.isRequired,
};
