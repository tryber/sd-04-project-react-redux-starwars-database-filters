import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filterByNumber } from '../actions/filters';

const NumberFilters = ({ filterByNumberProps, filterByNumberState }) => (
  <form
    onSubmit={(e) => {
      e.preventDefault();
      const inputValues = e.target.children;
      const filterArray = filterByNumberState;
      filterArray.push({
        columns: inputValues[0].value,
        comparison: inputValues[1].value,
        value: inputValues[2].value,
      });
      filterByNumberProps(filterArray);
    }}
  >
    <select data-testid="column-filter">
      <option value="population">population</option>

      <option value="population">population</option>
      <option value="orbital_period">orbital_period</option>
      <option value="diameter">diameter</option>
      <option value="rotation_period">rotation_period</option>
      <option value="surface_water">surface_water</option>
    </select>
    <select data-testid="comparison-filter">
      <option value="population">population</option>
      <option value="population">population</option>
      <option value="menor que">menor que</option>
      <option value="igual a">igual a</option>
    </select>
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
