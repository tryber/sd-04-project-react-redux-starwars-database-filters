import React from 'react';
import { connect } from 'react-redux';

const TableBody = ({ planets }) => {
  console.log(planets);

  return (
    <tbody>
      {planets.map((planet) => (
        <tr key={planet.name}>
          <td>{planet.name}</td>
          <td>{planet.rotation_period}</td>
          <td>{planet.orbital_period}</td>
        </tr>
      ))}
    </tbody>
  );
};

const mapStateToProps = (state) => ({
  planets: state.reducerAPI.data,
});

export default connect(mapStateToProps, null)(TableBody);
