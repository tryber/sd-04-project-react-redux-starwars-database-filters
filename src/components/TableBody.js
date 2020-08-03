import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import dataOrganization from './Function';

class TableBody extends Component {
  render() {
    const {
      planets, name, numericValues, order,
    } = this.props;
    return (
      <tbody>
        {dataOrganization(planets, name, numericValues, order).map((planet) => (
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

export const propsRepetidas = {
  column: PropTypes.string,
  comparison: PropTypes.string,
  value: PropTypes.string,
};

TableBody.propTypes = {
  planets: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      orbital_period: PropTypes.string,
      diameter: PropTypes.string,
      climate: PropTypes.string,
      gravity: PropTypes.string,
      terrain: PropTypes.string,
      surface_water: PropTypes.string,
      population: PropTypes.string,
    }),
  ).isRequired,
  name: PropTypes.string.isRequired,
  numericValues: PropTypes.arrayOf(PropTypes.shape(propsRepetidas)).isRequired,
  order: PropTypes.shape({
    column: PropTypes.string,
    sort: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  planets: state.getPlanets.data,
  name: state.filters.filterByName.name,
  numericValues: state.filters.filterByNumericValues,
  order: state.filters.order,
});

export default connect(mapStateToProps)(TableBody);
