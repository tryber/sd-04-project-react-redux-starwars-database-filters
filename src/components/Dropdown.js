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
  filtros,
}) {
  const selectColumn = () => {
    console.log(filtros.length);
    let values = ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
    if (filtros.length !== 0) {
      values = filtros.map((filtro) => values.filter((e) => filtro.column !== e));
      return values;
    }

    return (
      <select
        onChange={(e) => inputColumn(e.target.value)}
        data-testid="column-filter"
        name="dropdown-filter-category"
      >
        <option value="">--</option>
        {values.map((e) => (
          <option value={e}>{e}</option>
        ))}
      </select>
    );
  };

  return (
    <div>
      <form>
        {selectColumn()}
        <select
          onChange={(e) => inputComparison(e.target.value)}
          data-testid="comparison-filter"
          name="dropdown-quantity-filter"
        >
          <option value="">--</option>
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <label htmlFor="input-value">
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
  filtros: PropTypes.shape({
    length: PropTypes.number,
    map: PropTypes.func,
  }).isRequired,
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
  filtros: state.filters.filterByNumericValues,
});

export default connect(mapStateToProps, mapDispatchToProps)(DropDown);
