import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const compareFilters = (planets, { column, comparison, value }) => {
  switch (comparison) {
    case 'maior que':
      return Number(planets[column]) > Number(value);
    case 'menor que':
      return Number(planets[column]) < Number(value);
    case 'igual a':
      return Number(planets[column]) === Number(value);
    default:
      return false;
  }
};

const filterByOrder = ({ column, sort }, planets) => {
  switch (sort) {
    case 'ASC':
      return planets.sort((a, b) => a[column] - b[column]);
    case 'DESC':
      return planets.sort((a, b) => b[column] - a[column]);
    default:
      return null;
  }
};

const TableBody = ({ planets, filterByName, filterNumeric, filterOrder }) => {
  console.log('filtros por ordem: ', filterOrder);
  console.log(planets[0]);

  let filteredPlanets = planets
    .sort((a, b) => a.name.localeCompare(b.name))
    .filter((planet) => planet.name.toLowerCase().includes(filterByName));

  if (filterNumeric.length > 0) {
    filterNumeric.forEach(
      (filter) =>
        (filteredPlanets = filteredPlanets.filter((planet) => compareFilters(planet, filter))),
    );
  }

  const newPlanets = filterByOrder(filterOrder, planets);

  console.log('new planets:', newPlanets);

  console.log('planetas filtrados:', filteredPlanets);

  const objKeys = filteredPlanets.length > 0 ? Object.keys(filteredPlanets[0]) : null;

  return (
    <tbody>
      {filteredPlanets.map((planet) => (
        <tr key={planet.name}>
          {objKeys.map((key) => (
            <td key={key}>{planet[key]}</td>
          ))}
        </tr>
      ))}

      {/* {filteredPlanets.map((planet) => (
        <tr key={planet.name}>
          <td>{planet.name}</td>
          <td>{planet.rotation_period}</td>
          <td>{planet.orbital_period}</td>
          <td>{planet.diameter}</td>
          <td>{planet.climate}</td>
          <td>{planet.gravity}</td>
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
        </tr>
      ))} */}
    </tbody>
  );
};

const mapStateToProps = (state) => ({
  planets: state.reducerAPI.data,
  filterByName: state.filters.filterByName.name,
  filterNumeric: state.filters.filterByNumericValues,
  filterOrder: state.filters.order,
});

TableBody.propTypes = {
  filterByName: PropTypes.string.isRequired,
  planets: PropTypes.arrayOf(PropTypes.object).isRequired,
  filterNumeric: PropTypes.arrayOf(PropTypes.object).isRequired,
  filterOrder: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, null)(TableBody);
