import React from 'react';

class Table extends React.Component {
  render() {
    const { planets } = this.props;
    console.log('test print planet in Table', planets[0].name);
    return (
      <>
        <h2>Here is table </h2>
        <table>
          <thead>
            <tr>
              <th>name</th>
              <th>climate</th>
              <th>created</th>
              <th>diameter</th>
              <th>edited</th>
              <th>gravity</th>
              <th>orbital_period</th>
              <th>population</th>
              <th>rotation_period</th>
              <th>surface_water</th>
              <th>terrain</th>
              <th>url</th>
              <th>films</th>
            </tr>
          </thead>
          <tbody>
            {planets.map((planet) => (
              <tr key={planet.name}>
                <td>{planet.name}</td>
                <td>{planet.climate}</td>
                <td>{planet.created}</td>
                <td>{planet.diameter}</td>
                <td>{planet.edited}</td>
                <td>{planet.gravity}</td>
                <td>{planet.orbital_period}</td>
                <td>{planet.population}</td>
                <td>{planet.rotation_period}</td>
                <td>{planet.surface_water}</td>
                <td>{planet.terrain}</td>
                <td>{planet.url}</td>
                <td>{planet.films}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default Table;
