import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import filterPlanets from '../actions/filterPlanets';
import filterSelectOptions from '../actions/filterSelectOptions';

function renderNumericFilter(filterSelect) {
  const filters = {
    column: '',
    comparison: '',
    value: '',
  };

  return (
    <>
      <select
        data-testid="column-filter"
        id="column"
        onChange={(e) => {
          filters.column = e.target.value;
          return null;
        }}
      >
        <option value="population" defaultValue>
          population
        </option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        data-testid="comparison-filter"
        id="comparison"
        onChange={(e) => {
          filters.comparison = e.target.value;
          return null;
        }}
      >
        <option value="maior que" defaultValue>
          Maior que
        </option>
        <option value="menor que">Menor que</option>
        <option value="igual a">Igual a</option>
      </select>
      <input
        data-testid="value-filter"
        type="number"
        id="value"
        onChange={(e) => {
          filters.value = e.target.value;
          return null;
        }}
      />
      <button data-testid="button-filter" type="button" onClick={() => filterSelect(filters)}>
        Filtrar
      </button>
    </>
  );
}
class Header extends Component {
  render() {
    const { setFilter, data, filterSelect } = this.props;
    return (
      <div>
        <input
          data-testid="name-filter"
          type="text"
          onChange={(e) => {
            setFilter(e, data);
          }}
        />
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
    dispatch(filterSelectOptions(column, comparison, value))
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

Header.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  setFilter: PropTypes.func.isRequired,
  filterSelect: PropTypes.func.isRequired,
};
