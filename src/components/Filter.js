import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { filterPlanetByNumber } from '../actions/filterPlanetByName';

const Filter = ({ value, dispatchFilterPlanetByNumber }) => {
  const getFilterInfo = (e) => {
    e.preventDefault();
    const filterData = {
      column: e.target.column.value,
      comparison: e.target.comparison.value,
      value: e.target.input.value,
    };
    console.log(filterData);
    dispatchFilterPlanetByNumber(filterData);
  };
  console.log('State value: ', value);
  return (
    <div className="numeric-filter">
      <form onSubmit={(e) => getFilterInfo(e)}>
        <select data-testid="column-filter" name="column" id="column">
          <option value="population">Population</option>
          <option value="orbital_period">Orbital Period</option>
          <option value="diameter">Diamenter</option>
          <option value="rotation_period">Rotation Period</option>
          <option value="surface_water">Surface Water</option>
        </select>

        <select data-testid="comparison-filter" name="comparison" id="comparison">
          <option value="maior que">maior que</option>
          <option value="igual a">igual a</option>
          <option value="menor que">menor que</option>
        </select>

        <input name="input" />

        <button data-testid="button-filter" type="submit">Add Filter</button>
      </form>
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.number.isRequired,
  dispatchFilterPlanetByNumber: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  value: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchFilterPlanetByNumber: (filterData) => dispatch(filterPlanetByNumber(filterData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
