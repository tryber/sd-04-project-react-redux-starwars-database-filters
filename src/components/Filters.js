import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { filterBy, changeDataButton } from '../actions/actionFilter';

const Filters = ({ data, filterBy }) => {
  function filterColumn() {
    return (
      <div>
        <select data-testid="column-filter" defaultValue="DEFAULT">
          <option value="DEFAULT" disable="true">Column</option>
          <option value="population" name="population">Population</option>
          <option value="orbital_period" name="orbital_period">Orbital_Period</option>
          <option value="diameter" name="diameter">Diameter</option>
          <option value="rotation_period" name="rotation_period">Rotation_Period</option>
          <option value="surface_water" name="surface_water">Surface_Water</option>
        </select>
      </div>
    );
  }

  function sort(e) {
    const { value } = e.nativeEvent.target;
  }

  function filterComparison() {
    return (
      <div>
        <select onChange={(e) => sort(e)} data-testid="comparison-filter" efaultValue="DEFAULT">
          <option value="DEFAULT" disable="true">Comparison</option>
          <option onClick={sort()} value="maior_que" name="maior_que">Maior que</option>
          <option onClick={sort()} value="menor_que" name="menor_que">Menor que</option>
          <option onClick={sort()} value="igual_a" name="igual_a">Igual a</option>
        </select>
      </div>
    );
  }

  function filterValue() {
    return (
      <div>
        <label htmlFor="value_number">
          <input
            data-testid="value-filter"
            id="value_number"
            type="text"
            onChange={(e) => handleValueNumber(e)}
          />
        </label>
      </div>
    );
  }

  function buttonFilter() {

  }

  return (
    <div>
      {filterColumn()}
      {filterComparison()}
      {filterValue()}
      <button type="button" data-testid="button-filter" onClick={() => buttonFilter()}>
        Filter
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  data: state.planetReducer.data,
});

const mapDispatchToProps = (dispatch) => ({
  filterBy: (column, comparison, value) => dispatch(column, comparison, value),
  changeDataButton: (data) => dispatch(changeDataButton(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
