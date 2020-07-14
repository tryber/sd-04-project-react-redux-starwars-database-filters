import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPlanets, changeSearch, filtered } from '../actions';

class Search extends Component {
  componentDidMount() {
    this.props.planets();
  }

  render() {
    const { search, name, filterNumbers, filterByNumbers } = this.props;
    return (
      <div>
        <div>
          {console.log(filterByNumbers)}
          <input
            data-testid="name-filter"
            type="text"
            value={name}
            onChange={(e) => search(e.target.value)}
          />
        </div>
        <div>
          <h5>Filtro:</h5>
          <form>
            <select data-testid="column-filter" id="columns">
              <option value="population">population</option>
              <option value="orbital_period">orbital_period</option>
              <option value="diameter">diameter</option>
              <option value="rotation_period">rotation_period</option>
              <option value="surface_water">surface_water</option>
            </select>
            <select data-testid="comparison-filter" id="comparison">
              <option value="maior">maior que</option>
              <option value="menor">menor que</option>
              <option value="igual">igual a</option>
            </select>
            <input type="number" data-testid="value-filter" id="value" />
            <button
              type="button"
              data-testid="button-field"
              onClick={() => {
                filterNumbers({
                  column: document.getElementById('columns').value,
                  comparison: document.getElementById('comparison').value,
                  value: document.getElementById('value').value,
                }); console.log(filterByNumbers);}
              }
            >
              Adicionar Filtro
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  name: state.filters.filterByName.name,
  filterByNumbers: state.filters.filterByNumericValues, //array
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
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
