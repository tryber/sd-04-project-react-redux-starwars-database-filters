import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import filterPlanetsByName from '../actions/filterByName';
import { setNumericFilterVariables, setPlanetsFilteredByNumeric } from '../actions/filterByNumeric';

function renderFilterDropdown(setVariables, setFilteredPlanets, filtersList) {
  const listOfColumns = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const listOfComparisons = ['maior que', 'menor que', 'igual a'];

  const columns = filtersList.map((filter) => filter.column);
  const comparisons = filtersList.map((filter) => filter.comparison);

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
        {listOfColumns
          .filter((col) => !columns.includes(col))
          .map((column) => (
            <option key={column} value={column}>
              {column}
            </option>
          ))}
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
        {listOfComparisons
          .filter((comp) => !comparisons.includes(comp))
          .map((comparison) => (
            <option key={comparison} value={comparison}>
              {comparison}
            </option>
          ))}
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
      filtersList,
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
        {renderFilterDropdown(setVariables, setFilteredPlanets, filtersList)}
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
  filtersList: PropTypes.arrayOf(PropTypes.object).isRequired,
  setVariables: PropTypes.func.isRequired,
  setFilteredPlanets: PropTypes.func.isRequired,
};
