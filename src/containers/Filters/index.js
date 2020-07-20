import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  filterByName,
  filterByNumericValue,
  orderByColumn,
  removeNumericFilter,
} from '../../actions/FiltersActions';
import Planets from '../../testData';
import FiltersList from '../../components/FiltersList';

const columnFilterOptions = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

const renderColumnFilter = (selectedOptions) => (
  <select id="column-selector" data-testid="column-filter">
    <option value="vazio">vazio</option>
    {columnFilterOptions.map((avaibleOption) => {
      if (!selectedOptions.find((option) => option.column === avaibleOption)) {
        return <option value={avaibleOption}>{avaibleOption}</option>;
      }
    })}
  </select>
);


const handleNumericFilters = (searchByNumber) => {
  const column = document.querySelector('#column-selector').value;
  const comparison = document.querySelector('#comparison-selector').value;
  const number = document.querySelector('#value-input').value;

  if (column && comparison && number) {
    searchByNumber({
      column,
      comparison,
      value: number,
    });
  }
};

const handleSortFilters = (sortByColumn) => {
  const column = document.querySelector('#sort-column').value;
  const sortASC = document.querySelector('#sort-asc');

  if (column && sortASC) {
    sortByColumn({
      column,
      sort: (sortASC.checked) ? 'ASC' : 'DESC',
    });
  }
};

const getHeaders = () => Object.keys(Planets.results[0]).filter((header) => header !== 'residents');

const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);

const renderSortFilters = (sortByColumn) => (
  <form>
    <select data-testid="column-sort" id="sort-column">
      {getHeaders().map((option) => (
        <option value={capitalizeFirstLetter(option)}>{capitalizeFirstLetter(option)}</option>))}
    </select>
    <label htmlFor="sort-asc">ASC</label>
    <input
      data-testid="column-sort-input"
      id="sort-asc"
      name="sort-order"
      type="radio"
      value="ASC"
      defaultChecked
    />
    <label htmlFor="sort-desc">DESC</label>
    <input
      data-testid="column-sort-input"
      id="sort-desc"
      name="sort-order"
      type="radio"
      value="DESC"
    />
    <button
      type="button"
      data-testid="column-sort-button"
      onClick={() => handleSortFilters(sortByColumn)}
    >
      Filter
    </button>
  </form>
);


const Filters = (
  {
    searchByName,
    searchByNumber,
    filterByNumericValues,
    sortByColumn,
    removeFilter,
  },
) => (
  <div>
    <form>
      <input
        type="text"
        data-testid="name-filter"
        placeholder="Search by Name"
        onChange={(e) => searchByName(e.target.value)}
      />
      {renderColumnFilter(filterByNumericValues)}
      <select id="comparison-selector" data-testid="comparison-filter">
        <option value="vazio">vazio</option>
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input type="number" id="value-input" data-testid="value-filter" />
      <button
        type="button"
        data-testid="button-filter"
        onClick={() => handleNumericFilters(searchByNumber)}
      >
        Filter
      </button>
    </form>
    {renderSortFilters(sortByColumn)}
    <FiltersList filters={filterByNumericValues} filterDeletionHandler={removeFilter} />
  </div>
);

const mapStateToProps = (state) => ({
  filterByNumericValues: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  searchByName: (text) => dispatch(filterByName(text)),
  searchByNumber: (filter) => dispatch(filterByNumericValue(filter)),
  sortByColumn: (filter) => dispatch(orderByColumn(filter)),
  removeFilter: (filter) => dispatch(removeNumericFilter(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filters);

Filters.propTypes = {
  searchByName: PropTypes.func.isRequired,
};
