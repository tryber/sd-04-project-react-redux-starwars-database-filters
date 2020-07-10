import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import filterPlanets from '../actions/filterPlanets';
import filterSelectOption from '../actions/filterSelectOptions';

function renderNumericFilter(filterSelect) {
  const filter = {
    column: 'population',
    comparison: 'maior que',
    value: 0,
  };

  return (
    <div>
      <select
        data-testid="column-filter"
        onChange={(e) => {
          filter.column = e.target.value;
          return null;
        }}
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        data-testid="comparison-filter"
        onChange={(e) => {
          filter.comparison = e.target.value;
          return null;
        }}
      >
        <option value="maior que">Maior que</option>
        <option value="menor que">Menor que</option>
        <option value="igual">Igual a</option>
      </select>
      <input
        data-testid="value-filter"
        type="number"
        onChange={(e) => {
          filter.value = e.target.value;
          return null;
        }}
      />
      <button data-testid="button-filter" type="button" onClick={() => filterSelect(filter)}>
        Filtrar
      </button>
    </div>
  );
}

class Header extends Component {
  render() {
    const { setFilter, data, filterSelect } = this.props;
    return (
      <div>
        <input data-testid="name-filter" type="text" onChange={(e) => setFilter(e, data)} />
        {renderNumericFilter(filterSelect)}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.planetsReducer.data,
});

const mapDispatchToProps = (dispatch) => ({
  setFilter: (e, data) => dispatch(filterPlanets(data, e.target.value)),
  filterSelect: ({ column, comparison, value }) => (
    dispatch(filterSelectOption(column, comparison, value))
  ),
});

Header.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  setFilter: PropTypes.func.isRequired,
  filterSelect: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
