const API = 'https://swapi-trybe.herokuapp.com/api/planets';

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
          <th>Film</th>
          <th>Created</th>
          <th>Edited</th>
          <th>Url</th>
        </tr>
      </thead>
</table>

REQUESTING_PLANETS
REQUEST_PLANETS_SUCCESS
REQUEST_PLANETS_FAILURE

import { REQUESTING_PLANETS, REQUEST_PLANETS_SUCCESS, REQUEST_PLANETS_FAILURE } from '../actions';

<div>
<td>{planet.rotation_period}</td>
<td>{planet.orbital_period}</td>
<td>{planet.diameter}</td>
<td>{planet.climate}</td>
<td>{planet.gravity}</td>
<td>{planet.terrain}</td>
<td>{planet.surface_water}</td>
<td>{planet.population}</td>
<td>
  {planet.films.map((film) => (
    <span key={film}>{film}</span>
  ))}
</td>
<td>{planet.created}</td>
<td>{planet.edited}</td>
<td>{planet.url}</td>
</div>

const columns = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

const comparation = ['', 'maior que', 'menor que', 'igual a'];
