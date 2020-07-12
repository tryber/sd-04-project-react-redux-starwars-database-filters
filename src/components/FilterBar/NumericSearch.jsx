import React from 'react';
import { connect } from 'react-redux';
import { filterColumn, filterComparison, filterValue } from '../../actions/filter';

const createSelectColumn = (on) => (
  <select onChange={on} data-testid="column-filter">
    <option defaultValue>Column</option>
    <option value="population">population</option>
    <option value="orbital_period">orbital_period</option>
    <option value="diameter">diameter</option>
    <option value="rotation_period">rotation_period</option>
    <option value="surface_water">surface_water</option>
  </select>
);

const createSelectComparison = (on) => (
  <select
    onChange={on}
    data-testid="comparison-filter"
    name="comparison-filter"
    id="comparison-filter"
  >
    <option defaultValue>Comparison</option>
    <option value="maior que">maior que</option>
    <option value="igual a">igual a</option>
    <option value="menor que">menor que</option>
  </select>
);

const NumericSearch = (props) => {
  const { changeColumn, changeComparison, changeValue } = props;
  return (
    <form>
      {createSelectColumn((e) => changeColumn(e.target.value))}
      {createSelectComparison((e) => changeComparison(e.target.value))}

      <input
        onChange={(e) => changeValue(e.target.value)}
        data-testid="value-filter"
        type="number"
      />

      <button data-testid="button-filter" type="button">
        search
      </button>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  changeColumn: (column) => dispatch(filterColumn(column)),
  changeComparison: (comparison) => dispatch(filterComparison(comparison)),
  changeValue: (value) => dispatch(filterValue(value)),
});

export default connect(null, mapDispatchToProps)(NumericSearch);
