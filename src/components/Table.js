import React from 'react';
import PropTypes from 'prop-types';

class Table extends React.Component {
  render() {
    const { swFiltered } = this.props;
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>name</th>
              <th>population</th>
              <th>created</th>
              <th>diameter</th>
              <th>edited</th>
              <th>gravity </th>
              <th>orbital_period</th>
              <th>climate</th>
              <th>rotation_period</th>
              <th>surface_water</th>
              <th>terrain</th>
              <th>url</th>
              <th>films</th>
            </tr>
          </thead>
          <tbody>
            {swFiltered.map((planet) => (
              <tr key={planet.name}>
                <td>{planet.name}</td>
                <td>{planet.population}</td>
                <td>{planet.created}</td>
                <td>{planet.diameter}</td>
                <td>{planet.edited}</td>
                <td>{planet.gravity}</td>
                <td>{planet.orbital_period}</td>
                <td>{planet.climate}</td>
                <td>{planet.rotation_period}</td>
                <td>{planet.surface_water}</td>
                <td>{planet.terrain}</td>
                <td>{planet.url}</td>
                <td>{planet.films}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

Table.propTypes = {
  swFiltered: PropTypes.shape.isRequired,
};

export default Table;
