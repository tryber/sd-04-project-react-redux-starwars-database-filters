import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class TableBody extends Component {
  render() {
    const { planets } = this.props;
    return (
      <tbody>
        {planets.map((element) => (
          <tr key={element.name}>
            <td>{element.name}</td>
            <td>{element.rotation_period}</td>
            <td>{element.orbital_period}</td>
            <td>{element.diameter}</td>
            <td>{element.climate}</td>
            <td>{element.gravity}</td>
            <td>{element.terrain}</td>
            <td>{element.surface_water}</td>
            <td>{element.population}</td>
          </tr>
        ))}
      </tbody>
    );
  }
}

const mapStateToProps = (state) => ({
  planets: state.getPlanets.data,
});

export default connect(mapStateToProps)(TableBody);

TableBody.propTypes = {
  planets: PropTypes.arrayOf(PropTypes.object).isRequired,
};
