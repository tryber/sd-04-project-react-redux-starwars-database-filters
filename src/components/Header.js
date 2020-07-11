import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import filterPlanetsByName from '../actions/filterByName';
import { setNumericFilterVariables, setPlanetsFilteredByNumeric } from '../actions/filterByNumeric';

function renderFilterDropdown(setVariables, setFilteredPlanets) {
  return (
    <div>
      <select
        data-testid="column-filter"
        id="column"
        // onChange={(e) => {
        //   newFilter.column = e.target.value;
        //   return null;
        // }}
      >
        <option defaultValue>Coluna</option>
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        data-testid="comparison-filter"
        id="comparison"
        // onChange={(e) => {
        //   newFilter.comparison = e.target.value;
        //   return null;
        // }}
      >
        <option defaultValue>Comparação</option>
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        data-testid="value-filter"
        type="number"
        id="value"
        // onChange={(e) => {
        //   newFilter.value = e.target.value;
        //   return null;
        // }}
      />
      <button
        data-testid="button-filter"
        type="button"
        onClick={() => {
          const newFilter = {
            column: document.querySelector('#column').value,
            comparison: document.querySelector('#comparison').value,
            value: document.querySelector('#value').value,
          };
          setVariables(newFilter);
          setFilteredPlanets();
        }}
      >
        Filtrar
      </button>
    </div>
  );
}
class Header extends Component {
  render() {
    const {
      filterByName,
      planetsData,
      setVariables,
      setFilteredPlanets,
    } = this.props;
    return (
      <div>
        <input
          data-testid="name-filter"
          type="text"
          onChange={(e) => {
            filterByName(e, planetsData);
          }}
        />
        {renderFilterDropdown(setVariables, setFilteredPlanets)}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  planetsData: state.filters.planetsData,
  filteredPlanets: state.filters.filteredPlanets,
  filteredByNumeric: state.filters.filteredByNumeric,
  filtersList: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  filterByName: (e, data) => dispatch(filterPlanetsByName(data, e.target.value)),
  setVariables: (filter) => dispatch(setNumericFilterVariables(filter)),
  setFilteredPlanets: () => dispatch(setPlanetsFilteredByNumeric()),
  // setPlanets: (planets) => dispatch(setPlanetsFilteredByNumeric(planets)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

Header.propTypes = {
  planetsData: PropTypes.arrayOf(PropTypes.object).isRequired,
  // filteredByNumeric: PropTypes.arrayOf(PropTypes.object).isRequired,
  filterByName: PropTypes.func.isRequired,
  // filters: PropTypes.arrayOf(PropTypes.object).isRequired,
  setVariables: PropTypes.func.isRequired,
  setFilteredPlanets: PropTypes.func.isRequired,
};
