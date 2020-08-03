import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchGetPlanet } from '../actions';
import compareFunc from '../service/compareFunc';
// import Filter from './Filter';

class Table extends Component {
  componentDidMount() {
    const { getPlanets } = this.props;
    getPlanets();
  }

  render() {
    const { planets, name, comparisonParams } = this.props;
    const filterPlanet = compareFunc(planets, name, comparisonParams);
    console.log(filterPlanet);
    // const filterPlanet = planets.filter((planet) => planet.name.includes(name));
    const attributes = planets[0]
      ? Object.keys(planets[0]).filter((attribute) => attribute !== 'residents')
      : [];
    return (
      <div>
        <span>StarWars Datatable with Filters</span>
        {/* <Filter /> */}
        <thead>
          <tr>
            {attributes.map((index) => (
              <th key={index}>{index}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filterPlanet.map((planet) => (
            <tr key={planet.name}>
              {attributes.map((prop) => (
                <td key={prop}>{planet[prop]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  planets: state.reducer.data,
  name: state.filters.filterByName.name,
  comparisonParams: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  getPlanets: () => dispatch(fetchGetPlanet()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);

Table.propTypes = {
  planets: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      rotation_period: PropTypes.string,
      orbital_period: PropTypes.string,
      diameter: PropTypes.string,
      climate: PropTypes.string,
      gravity: PropTypes.string,
      terrain: PropTypes.string,
      surface_water: PropTypes.string,
      population: PropTypes.string,
      film: PropTypes.string,
      created: PropTypes.string,
      edited: PropTypes.string,
      url: PropTypes.string,
    }),
  ).isRequired,
  comparisonParams: PropTypes.arrayOf(PropTypes.object).isRequired,
  getPlanets: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};
