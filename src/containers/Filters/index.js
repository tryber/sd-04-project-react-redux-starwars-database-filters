import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  filterByName,
  filterByNumericValue,
} from '../../actions/FiltersActions';

const renderColumnFilter = (options) => {
  return (
    <select id="column-selector" data-testid="column-filter">
      {options.map((option) => (
        <option value={option}>{option}</option>
      ))}
    </select>
  );
};

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

const Filters = ({ searchByName, searchByNumber, columnFilterOptions}) => (
  <div>
    <form>
      <input
        type="text"
        data-testid="name-filter"
        placeholder="Search by Name"
        onChange={(e) => searchByName(e.target.value)}
      />

      <select id="comparison-selector" data-testid="comparison-filter">
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      {renderColumnFilter(columnFilterOptions)}
      <input type="number" id="value-input" data-testid="value-filter" />
      <button
        type="button"
        data-testid="button-filter"
        onClick={() =>
          handleNumericFilters(searchByNumber)
        }
      >
        Filter
      </button>
    </form>
  </div>
);

const mapStateToProps = (state) => ({
  columnFilterOptions: state.filters.columnFilterOptions,
});

const mapDispatchToProps = (dispatch) => ({
  searchByName: (text) => dispatch(filterByName(text)),
  searchByNumber: (filter) => dispatch(filterByNumericValue(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filters);

Filters.propTypes = {
  searchByName: PropTypes.func.isRequired,
};
