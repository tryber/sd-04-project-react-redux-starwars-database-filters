import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import filterFunc from './FilterFun';


class TableBody extends Component {
  render() {
    const { planets, name, numericValues } = this.props;
    const data = filterFunc(planets, name, numericValues);

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
  name: PropTypes.string.isRequired,
  numericValues: PropTypes.isRequired,
  planets: PropTypes.arrayOf(PropTypes.object).isRequired,
};


function mapStateToProps(state) {
  return {
    planets: state.getPlanets.data,
    name: state.filters.filterByName.name,
    numericValues: state.filters.filterByNumericValues,
  };
}

export default connect(mapStateToProps)(TableBody);
