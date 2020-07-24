import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filterByNumber } from '../actions/filters';

const columnFilter = (optionsArray, testId) => (
  <select data-testid={testId}>
    {optionsArray.map(({ value, text }) => (<option key={value} value={value}>{text}</option>))}
  </select>
);

const columnArray = [
  { value: '', text: 'Column' },
  { value: 'population', text: 'population' },
  { value: 'orbital_period', text: 'orbital_period' },
  { value: 'diameter', text: 'diameter' },
  { value: 'rotation_period', text: 'rotation_period' },
  { value: 'surface_water', text: 'surface_water' },
];
const comparisonArray = [
  { value: '', text: 'Comparison' },
  { value: 'maior que', text: 'maior que' },
  { value: 'menor que', text: 'menor que' },
  { value: 'igual a', text: 'igual a' },
];

const NumberFilters = ({ filterByNumberProps, filterByNumberState }) => (
  <form
    onSubmit={(e) => {
      e.preventDefault();
      const inputValues = {
        column: e.target.children[0].value,
        comparison: e.target.children[1].value,
        value: e.target.children[2].value,
      };
      const filterNumber = filterByNumberState;
      if (filterByNumberState.length === 0) {
        filterNumber.push(inputValues);
        filterByNumberProps(filterNumber);
      } else {
        if (!filterNumber.find((filter) => filter.column === inputValues.column)) {
          filterNumber.push(inputValues);
        }
        const newFilter = filterNumber.map((filter) => {
          if (filter.column === inputValues.column) {
            return inputValues;
          }
          return filter;
        });
        filterByNumberProps(newFilter);
      }
    }}
  >
    {columnFilter(columnArray, 'column-filter')}
    {columnFilter(comparisonArray, 'comparison-filter')}
    <input data-testid="value-filter" type="number" />
    <button data-testid="button-filter" type="submit">Apply filters</button>
  </form>
);
const mapStateToProps = (state) => ({
  filterByNumberState: state.filters.filterByNumericValues,
});
// test
const mapDispatchToProps = (dispatch) => ({
  filterByNumberProps: (e) => dispatch(filterByNumber(e)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NumberFilters);

NumberFilters.propTypes = {
  filterByNumberProps: PropTypes.func.isRequired,
  filterByNumberState: PropTypes.arrayOf(PropTypes.object).isRequired,
};
