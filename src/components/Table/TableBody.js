import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { createStore } from 'redux';

const TableBody = ({ data }) => (
  <tbody>
    {data.map(
      ({
        name,
        rotation_period: rotationPeriod,
        orbital_period: orbitalPeriod,
        diameter,
        climate,
        gravity,
        terrain,
        surface_water: surfaceWater,
        population,
        films,
        created,
        edited,
      }) => (
        <tr key={name}>
          {name}
          <td>{rotationPeriod}</td>
          <td>{orbitalPeriod}</td>
          <td>{diameter}</td>
          <td>{climate}</td>
          <td>{gravity}</td>
          <td>{terrain}</td>
          <td key={surfaceWater}>{surfaceWater}</td>
          <td>{population}</td>
          <td>{films}</td>
          {/* lembrar de req. filmes para pegar o titulo */}
          <td>{created}</td>
          <td>{edited}</td>
        </tr>
      ),
    )}
  </tbody>
);

const mapStateToProps = (state) => ({
  data: state.data,
  // fetching: state.fetching,
});

export default connect(mapStateToProps)(TableBody);

TableBody.protoTypes = {
  data: PropTypes.arrayOf(
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
};
