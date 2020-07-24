import React from 'react';
import PropTypes, { string } from 'prop-types';
import { connect } from 'react-redux';
import { filterPlanetByNumber } from '../actions/filterPlanetByName';

const Option = ({ value, children }) => <option value={value}>{children}</option>;

const Filter = ({ value, dispatchFilterPlanetByNumber, columns, comparisons }) => {
  const getFilterInfo = (e) => {
    e.preventDefault();
    const filterData = {
      column: e.target.column.value,
      comparison: e.target.comparison.value,
      value: e.target.input.value,
    };
    console.log(filterData);
    dispatchFilterPlanetByNumber(filterData);
  };
  console.log('State value: ', value);
  console.log('Colunas: ', columns);
  return (
    <div className="numeric-filter">
      <form onSubmit={(e) => getFilterInfo(e)}>
        <select data-testid="column-filter" name="column" id="column">
          {columns.map((column) => (
            <Option value={column}>{column}</Option>
          ))}
        </select>

        <select data-testid="comparison-filter" name="comparison" id="comparison">
          {comparisons.map((comparison) => (
            <Option value={comparison}>{comparison}</Option>
          ))}
        </select>

        <input data-testid="value-filter" name="input" type="number" />

        <button data-testid="button-filter" type="submit">Add Filter</button>
      </form>
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.number.isRequired,
  dispatchFilterPlanetByNumber: PropTypes.func.isRequired,
  columns: PropTypes.arrayOf(string).isRequired,
  comparisons: PropTypes.arrayOf(string).isRequired,
};

Option.propTypes = {
  children: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  value: state.filters.filterByNumericValues,
  columns: state.filters.columns,
  comparisons: state.filters.comparisons,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchFilterPlanetByNumber: (filterData) => dispatch(filterPlanetByNumber(filterData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
