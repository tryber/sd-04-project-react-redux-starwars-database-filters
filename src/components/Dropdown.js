import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { actionValue, actionComparison, actionColumn } from '../actions/actionInput';
import { actionAddFilter, actionRadio } from '../actions/actionFilter';
import { deleteFilter } from '../actions/actionDelete';

function DropDown({
  inputValue,
  inputComparison,
  inputColumn,
  column,
  comparison,
  value,
  addOnStoreFilters,
  filtros,
  onClickDeleteFilter,
  dispatchRadio,
  order,
  orderColumn,
}) {
  const filtrosOptions = () => {
    const values = ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
    if (filtros.length > 0) {
      const filtrados = filtros.map((e) => e.column);
      return values.filter((e) => !filtrados.includes(e));
    }
    return values;
  };

  const selectedColumn = () => {
    const values = filtrosOptions();
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

  const filtrosFeitos = () => {
    if (filtros.length !== 0) {
      return filtros.map((e, index) => (
        <span data-testid="filter">
          <p>{e.column}</p>
          <button onClick={() => onClickDeleteFilter(index)} type="button" key={e.column}>
            X
          </button>
        </span>
      ));
    }
    return null;
  };

  const radionButton = () => {
    const sortlines = [
      'name',
      'rotation_period',
      'orbital_period',
      'diameter',
      'climate',
      'gravity',
      'terrain',
      'surface_water',
      'population',
      'films',
      'created',
      'edited',
      'url',
    ];
    return (
      <div>
        <select
          onChange={(event) => dispatchRadio(order, event.target.value)}
          data-testid="column-sort"
        >
          {sortlines.map((e) => (
            <option value={e}>{e}</option>
          ))}
        </select>
        <label htmlFor="ASC">
          <input
            onChange={(e) => dispatchRadio(e.target.value, orderColumn)}
            type="radio"
            name="radio"
            checked
            data-testid="column-sort-input"
            value="ASC"
          />
          ASC
        </label>
        <label htmlFor="DESC">
          <input
            onChange={(e) => dispatchRadio(e.target.value, orderColumn)}
            type="radio"
            name="radio"
            data-testid="column-sort-input"
            value="DESC"
          />
          DESC
        </label>
        <button data-testid="column-sort-button" type="button">
          Sort
        </button>
      </div>
    );
  };

  return (
    <div>
      <form>
        {selectedColumn()}
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
        {radionButton()}
      </form>
      {filtrosFeitos()}
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
  onClickDeleteFilter: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

const mapDispatchToProps = (dispacth) => ({
  inputValue: (e) => dispacth(actionValue(e)),
  inputComparison: (e) => dispacth(actionComparison(e)),
  inputColumn: (e) => dispacth(actionColumn(e)),
  addOnStoreFilters: (a, b, c) => dispacth(actionAddFilter(a, b, c)),
  onClickDeleteFilter: (deleted) => dispacth(deleteFilter(deleted)),
  dispatchRadio: (a, b) => dispacth(actionRadio(a, b)),
});

const mapStateToProps = (state) => ({
  data: state.reducerFetch.data.results,
  column: state.reducerFilter.column,
  comparison: state.reducerFilter.comparison,
  value: state.reducerFilter.value,
  filtros: state.filters.filterByNumericValues,
  order: state.filters.order.sort,
  orderColumn: state.filters.order.column,
});

export default connect(mapStateToProps, mapDispatchToProps)(DropDown);
