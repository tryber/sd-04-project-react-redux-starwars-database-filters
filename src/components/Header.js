import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import filterPlanetsByName from '../actions/filterByName';
import {
  setNumericFilterVariables,
  setPlanetsFilteredByNumeric,
  removeFilter,
} from '../actions/filterByNumeric';
import Sort from './Sort';

function geratedlistOfColumns() {
  return ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
}

function generateFilteredColumns(listOfColumns, columns) {
  return listOfColumns
    .filter((col) => !columns.includes(col))
    .map((column) => (
      <option key={column} value={column}>
        {column}
      </option>
    ));
}

function generateFilteredValues(listOfComparisons) {
  return listOfComparisons.map((comparison) => (
    <option key={comparison} value={comparison}>
      {comparison}
    </option>
  ));
}

function generateNewFilter() {
  const newFilter = {
    column: document.querySelector('#column').value,
    comparison: document.querySelector('#comparison').value,
    value: document.querySelector('#value').value,
  };
  return newFilter;
}

function renderFilterDropdown(setVariables, setFilteredPlanets, filtersList) {
  const listOfColumns = geratedlistOfColumns();
  const listOfComparisons = ['maior que', 'menor que', 'igual a'];
  const columns = filtersList.map((filter) => filter.column);
  return (
    <div className="filtersContainer">
      <h4>Definir filtro:</h4>
      <select data-testid="column-filter" id="column">
        <option defaultValue>Coluna</option>
        {generateFilteredColumns(listOfColumns, columns)}
      </select>
      <select data-testid="comparison-filter" id="comparison">
        <option defaultValue>Comparação</option>
        {generateFilteredValues(listOfComparisons)}
      </select>
      <input data-testid="value-filter" type="number" id="value" />
      <button
        data-testid="button-filter"
        type="button"
        onClick={() => {
          setVariables(generateNewFilter());
          setFilteredPlanets();
        }}
      >
        Filtrar
      </button>
    </div>
  );
}

function renderFiltersSetted(filtersList, remove, setFilteredPlanets) {
  return (
    <div className="filtersContainer">
      <h4>Filtros:</h4>
      {filtersList.map((filter) => (
        <div className="cardFilters" key={filter.column} data-testid="filter">
          <p>{`${filter.column} ${filter.comparison} ${filter.value}`}</p>
          <button
            type="button"
            onClick={() => {
              remove(filter);
              setFilteredPlanets();
            }}
          >
            x
          </button>
        </div>
      ))}
    </div>
  );
}

class Header extends Component {
  render() {
    const {
      remove,
      filterByName,
      planetsData,
      setVariables,
      setFilteredPlanets,
      filtersList,
      isFetching,
    } = this.props;
    if (isFetching) return <p>Loading...</p>;
    return (
      <div>
        <div className="container">
          <h4>Procurar:</h4>
          <input
            data-testid="name-filter"
            type="text"
            onChange={(e) => {
              filterByName(e, planetsData);
            }}
          />
          {renderFilterDropdown(setVariables, setFilteredPlanets, filtersList)}
        </div>
        {renderFiltersSetted(filtersList, remove, setFilteredPlanets)}
      </div>
    );
  }
}

const orderData = ({ data, searchText, filterByNumericValues, order }) => {
  const objKeys =
    data.length !== 0 ? Object.keys(data[0]).filter((keys) => keys !== 'residents') : [];
  let planets = data.sort((a, b) => a.name.localeCompare(b.name));
  if (order.column !== 'Name') {
    planets = sortData(planets, order);
  }
  if (typeof filteredByNumeric && filteredByNumeric.length > 0) {
    filteredByNumeric.forEach((filter) => {
      const { column, comparison, value } = filter;
      planets = planets.filter((planeta) => compare(planeta, column, comparison, value));
    });
  }
  if (searchText !== '') {
    planets = planets.filter(
      (planet) =>
        planet.name.includes(searchText.toUpperCase()) ||
        planet.name.includes(searchText.toLowerCase()),
    );
  }
  return (
    <table className="table">
      <Table planets={planets} objKeys={objKeys} />
    </table>
  );
};

// const mapStateToProps = (state) => ({
//   data: state.swAPI.data,
//   searchText: state.filters.filterByName.name,
//   order: state.filters.order,
// });

orderData.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  searchText: PropTypes.string.isRequired,
  filterByNumericValues: PropTypes.arrayOf(PropTypes.object).isRequired,
  order: PropTypes.shape({ column: PropTypes.string, order: PropTypes.string }).isRequired,
};

const mapStateToProps = (state) => ({
  data: state.swAPI.data,
  searchText: state.filters.filterByName.name,
  order: state.filters.order,
  planetsData: state.filters.planetsData,
  filteredPlanets: state.filters.filteredPlanets,
  filteredByNumeric: state.filters.filteredByNumeric,
  filtersList: state.filters.filterByNumericValues,
  isFetching: state.filters.isFetching,
});

const mapDispatchToProps = (dispatch) => ({
  filterByName: (e, data) => dispatch(filterPlanetsByName(data, e.target.value)),
  setVariables: (filter) => dispatch(setNumericFilterVariables(filter)),
  setFilteredPlanets: () => dispatch(setPlanetsFilteredByNumeric()),
  remove: (filterToRemove) => dispatch(removeFilter(filterToRemove)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

Header.propTypes = {
  planetsData: PropTypes.arrayOf(PropTypes.object).isRequired,
  remove: PropTypes.func.isRequired,
  filterByName: PropTypes.func.isRequired,
  filtersList: PropTypes.arrayOf(PropTypes.object).isRequired,
  setVariables: PropTypes.func.isRequired,
  setFilteredPlanets: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
};
