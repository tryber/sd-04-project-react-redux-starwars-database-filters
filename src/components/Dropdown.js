import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { actionValue, actionComparison, actionColumn } from '../actions/actionInput';
import { actionAddFilter } from '../actions/actionFilter';

function DropDown({
  inputValue,
  inputComparison,
  inputColumn,
  column,
  comparison,
  value,
  addOnStoreFilters,
}) {
  return (
    <div>
      <form>
        <select
          onChange={(e) => inputColumn(e.target.value)}
          data-testid="column-filter"
          name="dropdown-filter-category"
        >
          <option value=""> </option>
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
        <select
          onChange={(e) => inputComparison(e.target.value)}
          data-testid="comparison-filter"
          name="dropdown-quantity-filter"
        >
          <option value=""> </option>
          <option value="maior">maior que</option>
          <option value="menor">menor que</option>
          <option value="igual">igual a</option>
        </select>
        <label>
          <input
            type="number"
            data-testid="value-filter"
            placeholder="Digite um número"
            onChange={(e) => inputValue(e.target.value)}
          />
        </label>
        <button
          type="button"
          data-testid="button-filter"
          onClick={() => addOnStoreFilters(column, comparison, value)}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

DropDown.propTypes = {
  addOnStoreFilters: PropTypes.func.isRequired,
  column: PropTypes.string.isRequired,
  comparison: PropTypes.string.isRequired,
  inputColumn: PropTypes.func.isRequired,
  inputComparison: PropTypes.func.isRequired,
  inputValue: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

const mapDispatchToProps = (dispacth) => ({
  inputValue: (e) => dispacth(actionValue(e)),
  inputComparison: (e) => dispacth(actionComparison(e)),
  inputColumn: (e) => dispacth(actionColumn(e)),
  addOnStoreFilters: (a, b, c) => dispacth(actionAddFilter(a, b, c)),
});

const mapStateToProps = (state) => ({
  column: state.reducerFilter.column,
  comparison: state.reducerFilter.comparison,
  value: state.reducerFilter.value,
});

export default connect(mapStateToProps, mapDispatchToProps)(DropDown);
