import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import filterFunc from './functions/filterFunc';

class TableBody extends Component {
  render() {
    const { planets, name, numericValues } = this.props;
    const data = filterFunc(planets, name, numericValues);
    // const filterName = planets.filter((planet) => planet.name.includes(name));
    return (
      <tbody>
        {data.map((planet) => (
          <tr key={planet.name}>
            <td>{planet.name}</td>
            <td>{planet.rotation_period}</td>
            <td>{planet.orbital_period}</td>
            <td>{planet.diameter}</td>
            <td>{planet.climate}</td>
            <td>{planet.gravity}</td>
            <td>{planet.terrain}</td>
            <td>{planet.surface_water}</td>
            <td>{planet.population}</td>
            <td>
              {planet.films.map((film) => (
                <span key={film}>{film}</span>
              ))}
            </td>
            <td>{planet.created}</td>
            <td>{planet.edited}</td>
            <td>{planet.url}</td>
          </tr>
        ))}
      </tbody>
    );
  }
}

TableBody.propTypes = {
  planets: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  numericValues: PropTypes.number.isRequired,
};


const mapState = (state) => ({
  planets: state.getPlanets.data,
  name: state.filters.filterByName.name,
  numericValues: state.filters.filterByNumericValues,
});

export default connect(mapState)(TableBody);
