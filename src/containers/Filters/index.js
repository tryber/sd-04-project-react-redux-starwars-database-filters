import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  filterByName,
  filterByNumericValue,
  removeNumericFilter,
} from '../../actions/FiltersActions';
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


const Filters = (
  {
    searchByName,
    searchByNumber,
    filterByNumericValues,
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
    <FiltersList filters={filterByNumericValues} filterDeletionHandler={removeFilter} />
  </div>
);

const mapStateToProps = (state) => ({
  filterByNumericValues: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  searchByName: (text) => dispatch(filterByName(text)),
  searchByNumber: (filter) => dispatch(filterByNumericValue(filter)),
  removeFilter: (filter) => dispatch(removeNumericFilter(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filters);

Filters.propTypes = {
  searchByName: PropTypes.func.isRequired,
};
