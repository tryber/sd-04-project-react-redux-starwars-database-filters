import React from 'react';
import PropTypes from 'prop-types';
import TableTop from './TableTop';

class Table extends React.Component {
  render() {
    const { swFiltered } = this.props;
    return (
      <table>
        <TableTop />
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
    );
  }
}

Table.propTypes = {
  swFiltered: PropTypes.shape.isRequired,
};

export default Table;
