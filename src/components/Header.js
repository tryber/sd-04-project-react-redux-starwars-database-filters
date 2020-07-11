import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import filterPlanetsByName from '../actions/filterByName';
import { setNumericFilterVariables } from '../actions/filterByNumeric';

function renderFilterDropdown(
  setVariables,
  { column = 'population', comparison = 'maior que', value = 0 },
) {
  const variables = {
    column,
    comparison,
    value,
  };

  return (
    <div>
      <select
        data-testid="column-filter"
        id="column"
        onChange={(e) => {
          variables.column = e.target.value;
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
          variables.comparison = e.target.value;
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
          variables.value = e.target.value;
          return null;
        }}
      />
      <button data-testid="button-filter" type="button" onClick={() => setVariables(variables)}>
        Filtrar
      </button>
    </div>
  );
}
class Header extends Component {
  render() {
    const {
      filterPlanetsByName,
      planetsData,
      setNumericFilterVariables,
      filterByNumericValues,
    } = this.props;
    return (
      <div>
        <input
          data-testid="name-filter"
          type="text"
          onChange={(e) => {
            filterPlanetsByName(e, planetsData);
          }}
        />
        {renderFilterDropdown(setNumericFilterVariables, filterByNumericValues)}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  planetsData: state.planets.planetsData,
  filterByNumericValues: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  filterPlanetsByName: (e, data) => dispatch(filterPlanetsByName(data, e.target.value)),
  setNumericFilterVariables: ({ column, comparison, value }) =>
    dispatch(setNumericFilterVariables(column, comparison, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

Header.propTypes = {
  planetsData: PropTypes.arrayOf(PropTypes.object).isRequired,
  filterPlanetsByName: PropTypes.func.isRequired,
  setNumericFilterVariables: PropTypes.func.isRequired,
};
