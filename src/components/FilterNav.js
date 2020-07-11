import React from 'react';
import PropTypes, { oneOfType } from 'prop-types';
import { connect } from 'react-redux';
import '../styles/App.css';
import { getAPI, filterByName, filterButton, saveFilter } from '../actions';

const FilterNav = ({
  getAPIProps,
  filterValues,
  filterBtn,
  saveFilterProps,
  name,
  column,
  comparison,
  value,
  categories,
}) => (
  <nav>
    <input
      value={name}
      data-testid="name-filter"
      onChange={(e) => filterValues(e.target.value)}
    />
    <div>
      <select
        name="column"
        onChange={(e) => saveFilterProps(e.target.name, e.target.value)}
        value={column}
        data-testid="column-filter"
      >
        <option aria-label="empty" />
        {categories.map((category) => <option key={category} value={category}>{category}</option>)}
      </select>

      <select
        name="comparison"
        onChange={(e) => saveFilterProps(e.target.name, e.target.value)}
        value={comparison}
        data-testid="comparison-filter"
      >
        <option aria-label="empty" />
        <option value="maior que">maior que</option>
        <option value="igual a">igual a</option>
        <option value="menor que">menor que</option>
      </select>
      <input
        name="value"
        value={value}
        onChange={(e) => saveFilterProps(e.target.name, e.target.value)}
        type="number"
        data-testid="value-filter"
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={() => filterBtn(column, comparison, value)}
        disabled={!(column && comparison && value)}
      >
        FILTER!
      </button>
    </div>
    <button type="button" onClick={() => getAPIProps()}>
      FIND PLANETS!
    </button>
  </nav>
);

const mapState = (state) => {
  const { column, comparison, value } = state.filters.actualFilter;
  const { name } = state.filters.filterByName;
  return {
    column,
    comparison,
    value,
    name,
    categories: state.filters.categories,
  };
};

const mapDispatch = {
  getAPIProps: getAPI,
  filterValues: filterByName,
  filterBtn: filterButton,
  saveFilterProps: saveFilter,
};

export default connect(mapState, mapDispatch)(FilterNav);

FilterNav.propTypes = {
  getAPIProps: PropTypes.func.isRequired,
  filterValues: PropTypes.func.isRequired,
  filterBtn: PropTypes.func.isRequired,
  saveFilterProps: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  column: PropTypes.string.isRequired,
  comparison: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(oneOfType(PropTypes.string)).isRequired,
};
