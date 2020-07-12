import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../styles/App.css';
import { getAPI, filterByName, filterButton, saveFilter } from '../actions';
import Input from './utilityComponents/Input';
import Button from './utilityComponents/Button';
import Select from './utilityComponents/Select';

const FilterNav = ({
  filterValues,
  filterBtn,
  saveFilterProps,
  name,
  column,
  comparison,
  value,
  categories,
  comparisons,
}) => (
  <nav>
    <label>
      Name filter:
      <Input
        onChange={(e) => filterValues(e.target.value)}
        name="name"
        value={name}
        test="name-filter"
      />
    </label>
    <div>
      <label>
        Pick a Category:
        <Select
          name="column"
          onChange={(e) => saveFilterProps(e.target.name, e.target.value)}
          options={categories}
          value={column}
          test="column-filter"
        />
      </label>
      <label>
        Pick a comparison:
        <Select
          name="comparison"
          onChange={(e) => saveFilterProps(e.target.name, e.target.value)}
          value={comparison}
          options={comparisons}
          test="comparison-filter"
        />
      </label>
      <label>
        Value:
        <Input
          onChange={(e) => saveFilterProps(e.target.name, e.target.value)}
          value={value}
          name="value"
          type="number"
          test="value-filter"
        />
        <Button
          onClick={() => filterBtn(column, comparison, value)}
          desc="FILTER!"
          disabled={!(column && comparison && value)}
          test="button-filter"
        />
      </label>
    </div>
    {/* <Button onClick={() => getAPIProps()} desc="FIND PLANETS!" /> */}
  </nav>
);

const mapState = (state) => {
  const { column, comparison, value } = state.filters.actualFilter;
  const { name } = state.filters.filterByName;
  const { categories, comparisons } = state.filters;
  return {
    column,
    comparison,
    value,
    name,
    categories,
    comparisons,
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
  filterValues: PropTypes.func.isRequired,
  filterBtn: PropTypes.func.isRequired,
  saveFilterProps: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  column: PropTypes.string.isRequired,
  comparison: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string]))
    .isRequired,
  comparisons: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string]))
    .isRequired,
};
