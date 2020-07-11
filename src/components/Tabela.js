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
    created,
    edited,
    url,
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
      <td key={`${name}12`}>{created}</td>
      <td key={`${name}13`}>{edited}</td>
      <td key={`${name}14`}>{url}</td>
    </tr>
  );
}

export default Tabela;
