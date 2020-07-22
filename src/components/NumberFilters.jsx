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
      <option selected disabled value="">Coluna</option>
      <option value="population">Population</option>
      <option value="orbital_period">Orbital period</option>
      <option value="diameter">Diameter</option>
      <option value="rotation_period">Rotation period</option>
      <option value="surface_water">Surface water</option>
    </select>
    <select data-testid="comparison-filter">
      <option selected disabled value="">Comparação</option>
      <option value="maior que">Maior que</option>
      <option value="menor que">Menor que</option>
      <option value="igual a">Igual a</option>
    </select>
    <input data-testid="value-filter" type="number" />
    <button data-testid="button-filter" type="submit">Apply filters</button>
  </form>
);
const mapStateToProps = (state) => ({
  filterByNumberState: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  filterByNumberProps: (e) => dispatch(filterByNumber(e)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NumberFilters);

NumberFilters.propTypes = {
  filterByNumberProps: PropTypes.func.isRequired,
  filterByNumberState: PropTypes.arrayOf(PropTypes.object).isRequired,
};
