import React from 'react';
import PropTypes from 'prop-types';

const CreateBody = ({ dados }) => (
  <tbody>
    {dados.map(
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
        residents,
        films,
        created,
        edited,
      }) => (
        <tr key={name}>
          <td key={`${name} ${name}`}>{name}</td>
          <td key={`${name} ${rotationPeriod}`}>{rotationPeriod}</td>
          <td key={`${name} ${orbitalPeriod}`}>{orbitalPeriod}</td>
          <td key={`${name} ${diameter}`}>{diameter}</td>
          <td key={`${name} ${climate}`}>{climate}</td>
          <td key={`${name} ${gravity}`}>{gravity}</td>
          <td key={`${name} ${terrain}`}>{terrain}</td>
          <td key={`${name} ${surfaceWater}`}>{surfaceWater}</td>
          <td key={`${name} ${population}`}>{population}</td>
          <td key={`${name} ${residents}`}>{residents}</td>
          <td key={`${name} ${films}`}>{films}</td>
          <td key={`${name} ${created}`}>{created}</td>
          <td key={`${name} ${edited}`}>{edited}</td>
        </tr>
      ),
    )}
  </tbody>
);

export default CreateBody;

CreateBody.propTypes = {
  dados: PropTypes.arrayOf(PropTypes.object).isRequired,
};
