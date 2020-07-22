import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filterByNumber } from '../actions/filters';

const NumberFilters = ({ filterByNumberProps }) => (
  <form
    onSubmit={(e) => {
      e.preventDefault();
      const inputValues = e.target.children;
      filterByNumberProps({
        columns: inputValues[0].value,
        comparison: inputValues[1].value,
        value: inputValues[2].value,
      });
    }}
  >
    <select data-testid="column-filter">
      <option value="population">Population</option>
      <option value="orbital_period">Orbital period</option>
      <option value="diameter">Diameter</option>
      <option value="rotation_period">Rotation period</option>
      <option value="surface_water">Surface water</option>
    </select>
    <select data-testid="comparison-filter">
      <option value="maior que">More than</option>
      <option value="menor que">Less than</option>
      <option value="igual a">Equal to</option>
    </select>
    <input data-testid="value-filter" type="number" />
    <button data-testid="button-filter" type="submit">Apply filters</button>
  </form>
);

const mapDispatchToProps = (dispatch) => ({
  filterByNumberProps: (e) => dispatch(filterByNumber(e)),
});

export default connect(null, mapDispatchToProps)(NumberFilters);

NumberFilters.propTypes = {
  filterByNumberProps: PropTypes.func.isRequired,
};
