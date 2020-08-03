import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class TableBody extends Component {
  render() {
    const { planets } = this.props;
    return (
      <tbody>
        {planets.map((planet) => (
          <tr key={planet.name}>
            <td>{planet.name}</td>
          </tr>
        ))}
      </tbody>
    );
  }
}

const mapState = (state) => ({
  planets: state.getPlanets.data,
});

export default connect(mapState, null)(TableBody);

TableBody.propTypes = {
  planets: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    }),
  ).isRequired,
};