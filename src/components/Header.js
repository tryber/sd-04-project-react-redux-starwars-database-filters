import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import filterPlanetsByName from '../actions/filterByName';
import {
  setNumericFilterVariables,
  setPlanetsFilteredByNumeric,
  removeFilter,
} from '../actions/filterByNumeric';
import { setOrderFilter, setFilteredByOrder } from '../actions/filterByOrder';

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

  return (
    <div>
      <h4>Definir filtro:</h4>
      <select data-testid="column-filter" id="column">
        <option defaultValue>Coluna</option>
        {listOfColumns
          .filter((col) => !columns.includes(col))
          .map((column) => (
            <option key={column} value={column}>
              {column}
            </option>
          ))}
      </select>
      <select data-testid="comparison-filter" id="comparison">
        <option defaultValue>Comparação</option>
        {listOfComparisons.map((comparison) => (
          <option key={comparison} value={comparison}>
            {comparison}
          </option>
        ))}
      </select>
      <input data-testid="value-filter" type="number" id="value" />
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

function renderFiltersSetted(filtersList, remove, setFilteredPlanets) {
  return (
    <div>
      <h4>Filtros:</h4>
      {filtersList.map((filter) => (
        <div key={filter.column} data-testid="filter">
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

function renderFiltersOrder(planetsData, setOrder, setFilteredPlanetsByOrder) {
  const columns = Object.keys(planetsData[0]);
  return (
    <div>
      <h4>Ordenar:</h4>
      <select data-testid="column-sort" id="column-sort">
        {columns
          .filter((title) => title !== 'residents')
          .map((title) => (
            <option key={title}>{title}</option>
          ))}
      </select>
      <input type="radio" id="ASC" name="column" data-testid="column-sort-input" value="ASC" />
      <label htmlFor="ASC">ASC</label>
      <input type="radio" id="DESC" name="column" data-testid="column-sort-input" value="DESC" />
      <label htmlFor="DESC">DESC</label>
      <button
        type="button"
        data-testid="column-sort-button"
        onClick={() => {
          const selectedSort = document.querySelector('input[name="column"]:checked').value;
          const selectedColumn = document.querySelector('#column-sort').value;
          const order = {
            column: selectedColumn,
            sort: selectedSort,
          };
          setOrder(order);
          setFilteredPlanetsByOrder();
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
      remove,
      filterByName,
      planetsData,
      setVariables,
      setFilteredPlanets,
      filtersList,
      isFetching,
      setOrder,
      setFilteredPlanetsByOrder,
    } = this.props;
    if (isFetching) return <p>Loading...</p>;
    return (
      <div>
        <h4>Procurar:</h4>
        <input
          data-testid="name-filter"
          type="text"
          onChange={(e) => {
            filterByName(e, planetsData);
          }}
        />
        {renderFiltersOrder(planetsData, setOrder, setFilteredPlanetsByOrder)}
        {renderFilterDropdown(setVariables, setFilteredPlanets, filtersList)}
        {renderFiltersSetted(filtersList, remove, setFilteredPlanets)}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  planetsData: state.filters.planetsData,
  isFetching: state.filters.isFetching,
  filteredPlanets: state.filters.filteredPlanets,
  filteredByNumeric: state.filters.filteredByNumeric,
  filtersList: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  filterByName: (e, data) => dispatch(filterPlanetsByName(data, e.target.value)),
  setVariables: (filter) => dispatch(setNumericFilterVariables(filter)),
  setFilteredPlanets: () => dispatch(setPlanetsFilteredByNumeric()),
  remove: (filterToRemove) => dispatch(removeFilter(filterToRemove)),
  setOrder: (order) => dispatch(setOrderFilter(order)),
  setFilteredPlanetsByOrder: () => dispatch(setFilteredByOrder()),
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
  setOrder: PropTypes.func.isRequired,
  setFilteredPlanetsByOrder: PropTypes.func.isRequired,
};
