import React from 'react';
import PropTypes from 'prop-types';
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
        <option value="population">population</option>
        <option value="rotation_period">rotation_period</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="surface_water">surface_water</option>
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
};
