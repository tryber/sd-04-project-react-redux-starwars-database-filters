import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPlanets, changeSearch, filtered } from '../actions';

const initialColumns = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

const filterColumns = (columnsInState) => {
  if (columnsInState.length === 0) return initialColumns;
  const usedColumns = columnsInState.map((numericFilter) => numericFilter.column);
  return initialColumns.filter((columnOption) => !usedColumns.includes(columnOption));
};

class Search extends Component {
  componentDidMount() {
    const { planets } = this.props;
    planets();
  }

  renderBtnForm() {
    const { filterNumbers } = this.props;
    return (
      <button
        type="button"
        data-testid="button-filter"
        onClick={() => {
          filterNumbers({
            column: document.getElementById('columns').value,
            comparison: document.getElementById('comparison').value,
            value: document.getElementById('value').value,
          });
        }}
      >
        Adicionar Filtro
      </button>
    );
  }

  renderForm() {
    const { filterByNumbers } = this.props;
    return (
      <form>
        <select data-testid="column-filter" id="columns">
          <option defaultValue>Selecione</option>
          {/* <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option> */}
          {filterColumns(filterByNumbers).map((column) => (
            <option key={column}>{column}</option>
          ))}
        </select>
        <select data-testid="comparison-filter" id="comparison">
          <option defaultValue>Selecione</option>
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input type="number" data-testid="value-filter" id="value" />
        {this.renderBtnForm()}
      </form>
    );
  }

  render() {
    const { search, name } = this.props;
    return (
      <div>
        <div>
          <input
            data-testid="name-filter"
            type="text"
            value={name}
            onChange={(e) => search(e.target.value)}
          />
        </div>
        <div>
          <h5>Filtro:</h5>
          {this.renderForm()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  name: state.filters.filterByName.name,
  filterByNumbers: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  planets: (endpoint) => dispatch(getPlanets(endpoint)),
  search: (planetName) => dispatch(changeSearch(planetName)),
  filterNumbers: (value) => dispatch(filtered(value)),
});

Search.propTypes = {
  planets: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  search: PropTypes.func.isRequired,
  filterNumbers: PropTypes.func.isRequired,
  filterByNumbers: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
