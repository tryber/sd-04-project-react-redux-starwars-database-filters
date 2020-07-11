import React from 'react';
import { connect } from 'react-redux';
import { filterNumeric } from '../../actions/filter';

const NumericSearch = (props) => {
  const { changeNumeric } = props;
  return (
    <form>
      <select
        onChange={(e) => changeNumeric(e.target.value)}
        data-testid="column-filter"
        name="column-filter"
        id="column-filter"
      >
        <option value="">Coluna</option>
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        onChange={(e) => changeNumeric(e.target.value)}
        data-testid="comparison-filter"
        name="comparison-filter"
        id="comparison-filter"
      >
        <option value="">Comparação</option>
        <option value="">Maior que</option>
        <option value="">Menor que</option>
        <option value="">Igual a</option>
      </select>
      <input data-testid="value-filter" type="number" />
      <button data-testid="button-filter" type="button">
        search
      </button>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  changeNumeric: (column, comparison, value) => dispatch(filterNumeric(column, comparison, value)),
});

export default connect(null, mapDispatchToProps)(NumericSearch);
