import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../styles/App.css';
import {
  getAPI,
  filterByName,
  filterButton,
  saveFilter,
  saveOrder,
  orderButton,
} from '../actions';
import Input from './utilityComponents/Input';
import Button from './utilityComponents/Button';
import Select from './utilityComponents/Select';
import ActiveFilters from './ActiveFilters';

const FilterNav = ({
  categories,
  column,
  comparison,
  comparisons,
  data,
  filterValues,
  filterBtn,
  filterByNumericValues,
  value,
  actualColumn,
  actualSort,
  orderBtn,
  saveFilterProps,
  saveOrderProps,
}) => {
  const listOfAcitveColumns = filterByNumericValues.map((filterObj) => filterObj.column);
  return (
    <nav>
      <label htmlFor="nameLabel">
        Name filter:
        <Input
          onChange={(e) => filterValues(e.target.value)}
          name="name"
          test="name-filter"
        />
      </label>

      <div className="row">
        <label htmlFor="containerLabel">
          <label htmlFor="categoryLabel">
            Pick a Category:
            <Select
              onChange={(e) => saveFilterProps('column', e.target.value)}
              options={categories.filter((category) => !listOfAcitveColumns.includes(category))}
              test="column-filter"
            />
          </label>
          <label htmlFor="comparisonLabel">
            Pick a comparison:
            <Select
              onChange={(e) => saveFilterProps('comparison', e.target.value)}
              value={comparison}
              options={comparisons}
              test="comparison-filter"
            />
          </label>
          <label htmlFor="valueLabel">
            Value:
            <Input
              onChange={(e) => saveFilterProps('value', e.target.value)}
              value={value}
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
        </label>
        <label htmlFor="orderLabel">
          Order a Category:
          {data.length > 0 && (
            <div>
              <Select
                onChange={(e) => saveOrderProps('column', e.target.value)}
                options={Object.keys(data[0])}
                test="column-sort"
              />
              <label htmlFor="orderASC"> ASC:</label>
              <Input
                type="radio"
                name="order"
                id="orderASC"
                checked
                value="ASC"
                onChange={(e) => saveOrderProps('sort', e.target.value)}
                test="column-sort-input"
              />
              <label htmlFor="orderDESC"> DESC:</label>
              <Input
                type="radio"
                name="order"
                id="orderDESC"
                value="DESC"
                onChange={(e) => saveOrderProps('sort', e.target.value)}
                test="column-sort-input"
              />
              <Button
                onClick={() => orderBtn(actualColumn, actualSort)}
                desc="SORT!"
                disabled={false}
                test="column-sort-button"
              />
            </div>
          )}
        </label>
      </div>
      <ActiveFilters />
      {/* <Button onClick={() => getAPIProps()} desc="FIND PLANETS!" /> */}
    </nav>
  );
};

const mapState = (state) => {
  const { column, comparison, value } = state.filters.actualFilter;
  const { categories, comparisons, order, actualOrder, filterByNumericValues } = state.filters;
  const { name } = state.filters.filterByName;
  const { data } = state.api;
  return {
    column,
    categories,
    comparison,
    comparisons,
    data,
    filterByNumericValues,
    name,
    actualColumn: actualOrder.column,
    actualSort: actualOrder.sort,
    orderColumn: order.column,
    orderSort: order.sort,
    value,
  };
};

const mapDispatch = {
  getAPIProps: getAPI,
  filterValues: filterByName,
  filterBtn: filterButton,
  saveFilterProps: saveFilter,
  saveOrderProps: saveOrder,
  orderBtn: orderButton,
};

export default connect(mapState, mapDispatch)(FilterNav);

FilterNav.propTypes = {
  filterValues: PropTypes.func.isRequired,
  filterBtn: PropTypes.func.isRequired,
  saveFilterProps: PropTypes.func.isRequired,
  saveOrderProps: PropTypes.func.isRequired,
  orderBtn: PropTypes.func.isRequired,
  column: PropTypes.string.isRequired,
  comparison: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  actualColumn: PropTypes.string.isRequired,
  actualSort: PropTypes.string.isRequired,
  filterByNumericValues: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
  categories: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string])).isRequired,
  comparisons: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string])).isRequired,
  data: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.object]),
  ).isRequired,
};
