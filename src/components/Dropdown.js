import React from 'react';
import { connect } from 'react-redux';
import { actionValue, actionComparison, actionColumn } from '../actions/actionInput';

function DropDown({ value, comparison, column }) {
  // let input;
  // const onSubmit = (event) => {
  //   event.preventDefault();
  //   sendFilters(input.value);
  //   input.value = '';
  // };

  return (
    <div>
      <forms>
        <select
          onChange={(e) => column(e)}
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
          data-testid="comparison-filter"
          name="dropdown-quantity-filter"
          onChange={(e) => comparison(e)}
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
            onChange={(e) => value(e)}
            placeholder="Digite um número"
          />
        </label>
        <button type="button" data-testid="button-filter">
          Submit
        </button>
      </forms>
    </div>
  );
}

const mapDispatchToProps = (dispacth) => ({
  value: (event) => dispacth(actionValue(event)),
  comparison: (event) => dispacth(actionComparison(event)),
  column: (event) => dispacth(actionColumn(event)),
});

const mapStateToProps = (state) => ({
  valueNumber: state.filters.filterByNumericValues.value,
});

export default connect(mapStateToProps, mapDispatchToProps)(DropDown);
