import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Table = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Residents</th>
          <th>Films</th>
        </tr>
      </thead>
      <tbody>
        {data.map(
          ({
            name,
            rotation_period,
            orbital_period,
            diameter,
            climate,
            gravity,
            terrain,
            surface_water,
            population,
            residents,
            films,
          }) => (
            <tr key={name}>
              <td key={name + name}>{name}</td>
              <td key={name + rotation_period}>{rotation_period}</td>
              <td key={name + orbital_period}>{orbital_period}</td>
              <td key={name + diameter}>{diameter}</td>
              <td key={name + climate}>{climate}</td>
              <td key={name + gravity}>{gravity}</td>
              <td key={name + terrain}>{terrain}</td>
              <td key={name + surface_water}>{surface_water}</td>
              <td key={name + population}>{population}</td>
              <td key={name + residents}>{residents}</td>
              <td key={name + films}>{films}</td>
            </tr>
          ),
        )}
      </tbody>
    </table>
  );
};

const mapState = (state) => ({
  data: state.reducer.data,
});

export default connect(mapState)(Table);

Table.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  ).isRequired,
};
