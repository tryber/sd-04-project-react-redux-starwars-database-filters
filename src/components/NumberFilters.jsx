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

const NumberFilters = ({
  filterByNumberProps,
  filterByNumberState,
}) => (
  <div>
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const inputValues = {
          column: e.target.children[0].value,
          comparison: e.target.children[1].value,
          value: e.target.children[2].value,
        };
        const filterNumber = filterByNumberState;
        const columnOptions = document.querySelectorAll('#column-option');
        columnArray.forEach((option, index) => {
          if (option.value === inputValues.column) {
            columnArray.splice(index, 1);
          }
        });
        if (inputValues.column && inputValues.comparison) {
          filterNumber.push(inputValues);
          filterByNumberProps(filterNumber);
        }
        columnOptions.forEach((option) => {
          if (option.value === inputValues.column
              && inputValues.column
              && inputValues.comparison) {
            option.remove();
          }
        });
      }}
    >
      {columnFilter(columnArray, 'column-filter', 'column-option')}
      {columnFilter(comparisonArray, 'comparison-filter', 'comparison-option')}
      <input data-testid="value-filter" type="number" />
      <button data-testid="button-filter" type="submit">Filtrar</button>
    </form>
    <ShowFilters />
  </div>
);

const mapStateToProps = (state) => ({
  filterByNumberState: state.filters.filterByNumericValues,
});
const mapDispatchToProps = (dispatch) => ({
  filterByNumberProps: (e) => dispatch(filterByNumber(e)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NumberFilters);

NumberFilters.propTypes = {
  filterByNumberProps: PropTypes.func.isRequired,
  filterByNumberState: PropTypes.arrayOf(PropTypes.object).isRequired,
};
