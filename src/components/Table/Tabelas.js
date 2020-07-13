import PropTypes from 'prop-types';
import React from 'react';

function Tabela(props) {
  const {
    name,
    rotation_period,
    orbital_period,
    diameter,
    climate,
    gravity,
    terrain,
    surface_water,
    population,
    films,
  } = props.planet;
  return (
    <tr>
      <td key={`${name}1`}>{name}</td>
      <td key={`${name}2`}>{rotation_period}</td>
      <td key={`${name}3`}>{orbital_period}</td>
      <td key={`${name}4`}>{diameter}</td>
      <td key={`${name}5`}>{climate}</td>
      <td key={`${name}6`}>{gravity}</td>
      <td key={`${name}7`}>{terrain}</td>
      <td key={`${name}8`}>{surface_water}</td>
      <td key={`${name}9`}>{population}</td>
      <td key={`${name}11`}>{films}</td>
    </tr>
  );
}

Tabela.propTypes = {
  planet: PropTypes.shape({
    name: PropTypes.string,
    rotation_period: PropTypes.string,
    orbital_period: PropTypes.string,
    diameter: PropTypes.string,
    climate: PropTypes.string,
    gravity: PropTypes.string,
    terrain: PropTypes.string,
    surface_water: PropTypes.string,
    population: PropTypes.string,
    films: PropTypes.string,
  }).isRequired,
};

export default Tabela;
