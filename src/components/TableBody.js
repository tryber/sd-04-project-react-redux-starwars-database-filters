import React from 'react';
import { connect } from 'react-redux';

import './Tabela.css';

const TableBody = (props) => {
  return (
    <tbody>
      {props.data.map(planet => (
        <tr key={planet.name}>
          <td>{planet.name}</td> <td>{planet.climate}</td>{' '}
          <td>{planet.created}</td>
          <td>{planet.diameter}</td> <td>{planet.edited}</td>{' '}
          <td>{planet.gravity}</td>
          <td>{planet.orbital_period}</td> <td>{planet.population}</td>
          <td>{planet.rotation_period}</td> <td>{planet.surface_water}</td>
          <td>{planet.terrain}</td> <td>{planet.url}</td>{' '}
          <td>{planet.films}</td>
        </tr>
      ))}
    </tbody>
  );
};

const mapStateToProps = (state) => ({
  data: state.reducerGetApi.data,
});

export default connect(mapStateToProps)(TableBody);
