import React from 'react';
import PropTypes from 'prop-types';

class Table extends React.Component {
  render() {
    const { filteredPlanet } = this.props;

    return ( // refatorar with extern [] and map
      <div>
        <table className="table table-striped ">
          <thead className="thead-dark">
            <tr>
              <th scope="col">name</th> <th scope="col">climate</th> <th scope="col">created</th>
              <th scope="col">diameter</th> <th scope="col">edited</th>
              <th scope="col">gravity</th> <th scope="col">orbital_period</th>
              <th scope="col">population</th> <th scope="col">rotation_period</th>
              <th scope="col">surface_water</th> <th scope="col">terrain</th>
              <th scope="col">url</th> <th scope="col">films</th>
            </tr>
          </thead>
          <tbody>
            {filteredPlanet.map((planet) => (
              <tr key={planet.name}>
                <th scope="row">{planet.name}</th> <td>{planet.climate}</td> <td>{planet.created}</td>
                <td>{planet.diameter}</td> <td>{planet.edited}</td> <td>{planet.gravity}</td>
                <td>{planet.orbital_period}</td> <td>{planet.population}</td>
                <td>{planet.rotation_period}</td> <td>{planet.surface_water}</td>
                <td>{planet.terrain}</td> <td>{planet.url}</td> <td>{planet.films}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

Table.propTypes = {
  // planets: PropTypes.shape.isRequired,
  filteredPlanet: PropTypes.shape.isRequired,
};
export default Table;
