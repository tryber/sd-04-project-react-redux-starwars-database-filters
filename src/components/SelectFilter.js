import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  filterByNumericValues,
  selectColumn,
  selectComparison,
  selectNumber,
} from '../actions';

const columnOptions = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

const comparisonOptions = ['maior que', 'menor que', 'igual a'];

const renderSelectColumn = (changeColumn) => (
  <select
    data-testid="column-filter"
    onChange={(event) => changeColumn(event.target.value)}
  >
    <option defaultValue>Coluna</option>
    {columnOptions.map((option) => (
      <option key={option} value={option}>
        {option}
      </option>
    ))}
  </select>
);

const renderSelectComparison = (changeComparison) => (
  <select
    data-testid="comparison-filter"
    onChange={(event) => changeComparison(event.target.value)}
  >
    <option defaultValue>Comparação</option>
    {comparisonOptions.map((item) => (
      <option key={item} value={item}>
        {item}
      </option>
    ))}
  </select>
);

const renderInputNumber = (changeNumber) => (
  <input
    type="number"
    data-testid="value-filter"
    onChange={(event) => changeNumber(event.target.value)}
  />
);

const SelectFilter = ({
  column,
  comparison,
  number,
  changeColumn,
  changeComparison,
  changeNumber,
  saveNumericFilter,
}) => (
  <div>
    {renderSelectColumn(changeColumn)}
    {renderSelectComparison(changeComparison)}
    {renderInputNumber(changeNumber)}
    <button
      type="button"
      data-testid="button-filter"
      onClick={() => saveNumericFilter({ column, comparison, value: number })}
    >
      Filtrar
    </button>
  </div>
);

const mapStateToProps = (state) => ({
  column: state.selectFilter.column,
  comparison: state.selectFilter.comparison,
  number: state.selectFilter.value,
});

const mapDispatchToProps = (dispatch) => ({
  saveNumericFilter: (payload) => dispatch(filterByNumericValues(payload)),
  changeColumn: (payload) => dispatch(selectColumn(payload)),
  changeComparison: (payload) => dispatch(selectComparison(payload)),
  changeNumber: (payload) => dispatch(selectNumber(payload)),
});

SelectFilter.propTypes = {
  changeColumn: PropTypes.func.isRequired,
  changeComparison: PropTypes.func.isRequired,
  changeNumber: PropTypes.func.isRequired,
  saveNumericFilter: PropTypes.func.isRequired,
  column: PropTypes.string.isRequired,
  comparison: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectFilter);
