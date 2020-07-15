import React from 'react';
import { connect } from 'react-redux';
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
