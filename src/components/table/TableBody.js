import React from 'react';
import { connect } from 'react-redux';

const TableBody = ({ planets }) => {
  return (
    <tbody>
      { planets.map((planet) => (
        <tr key={planet.name}>
          <td>{planet.name}</td>
        </tr>
      )) }
    </tbody>
  );
}

const mapStateToProps = (state) => ({
  planets: state.getPlanets.data,
});

export default connect(mapStateToProps)(TableBody);
