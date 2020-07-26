import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import numericFilter from '../function/numericFilter';

class TableBody extends Component {
  render() {
    const { planets, name, numeric } = this.props;
    const data = numericFilter(planets, name, numeric);
    return (
      <tbody>
        {data.map((item) => (
          <tr key={item.name}>
            <td>{item.name}</td>
            <td>{item.population}</td>
            <td>{item.climate}</td>
            <td>{item.diameter}</td>
            <td>{item.gravity}</td>
            <td>{item.orbital_period}</td>
            <td>{item.rotation_period}</td>
            <td>{item.surface_water}</td>
            <td>{item.terrain}</td>
            <td>{item.films}</td>
            <td>{item.edited}</td>
            <td>{item.created}</td>
            <td>{item.url}</td>
          </tr>
        ))}
      </tbody>
    );
  }
}

const mapStateToProps = (state) => ({
  planets: state.planetReducer.planets.planets,
  name: state.filters.filterByName.name,
  numeric: state.filters.filterByNumericValues,
});

TableBody.propTypes = {
  planets: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      population: PropTypes.string,
      climate: PropTypes.string,
      diameter: PropTypes.string,
      gravity: PropTypes.string,
      orbital_period: PropTypes.string,
      rotation_period: PropTypes.string,
      surface_water: PropTypes.string,
      terrain: PropTypes.string,
    }),
  ).isRequired,
  name: PropTypes.string.isRequired,
  numeric: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(TableBody);
