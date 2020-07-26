import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class TableBody extends Component {
  render() {
    const { planets, name } = this.props;
    const filterName = planets.filter((planet) => planet.name.includes(name));
    return (
      <tbody>
        {filterName.map((item) => (
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
  name: state.filterReducer.filters.filterByName.name,
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
    })
  ).isRequired,
  name: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(TableBody);
