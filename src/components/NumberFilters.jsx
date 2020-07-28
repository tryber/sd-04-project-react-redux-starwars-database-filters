import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { filterByNumber } from '../actions/filters';
import ShowFilters from './ShowFilters';

const columnFilter = (optionsArray, testId, id) => (
  <select data-testid={testId}>
    {optionsArray.map(({ value, text }) => (
      <option id={id} key={value} value={value}>{text}</option>
    ))}
  </select>
);

const columnArray = [
  { value: '', text: 'Column' },
  { value: 'population', text: 'population' },
  { value: 'orbital_period', text: 'orbital_period' },
  { value: 'diameter', text: 'diameter' },
  { value: 'rotation_period', text: 'rotation_period' },
  { value: 'surface_water', text: 'surface_water' },
];
const comparisonArray = [
  { value: '', text: 'Comparação' },
  { value: 'maior que', text: 'maior que' },
  { value: 'menor que', text: 'menor que' },
  { value: 'igual a', text: 'igual a' },
];

const NumberFilters = ({ filterByNumberProps, filterByNumericValues }) => {
  const filteredColumns = filterByNumericValues.reduce((acc, cur) => {
    const { column } = cur;
    return (
      acc.filter(({ value }) => value !== column)
    );
  }, columnArray);

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const inputValues = {
            column: e.target.children[0].value,
            comparison: e.target.children[1].value,
            value: e.target.children[2].value,
          };
          if (inputValues.column || inputValues.comparison || inputValues.value) {
            filterByNumberProps(inputValues);
          }
        }}
      >
        {columnFilter(filteredColumns, 'column-filter', 'column-option')}
        {columnFilter(comparisonArray, 'comparison-filter', 'comparison-option')}
        <input data-testid="value-filter" type="number" />

        <button data-testid="button-filter" type="submit">Filtrar</button>
      </form>
      <ShowFilters />
    </div>
  );
};
const mapStateToProps = ({ filters: { filterByNumericValues } }) => ({
  filterByNumericValues,
});
const mapDispatchToProps = (dispatch) => ({
  filterByNumberProps: (e) => dispatch(filterByNumber(e)),
});


export default connect(mapStateToProps, mapDispatchToProps)(NumberFilters);

NumberFilters.propTypes = {
  filterByNumberProps: PropTypes.func.isRequired,
  filterByNumericValues: PropTypes.arrayOf(PropTypes.object).isRequired,
};
