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

const TableBody = ({ planets, filterByName, filterNumeric }) => {
  console.log(planets);

  let filteredPlanets = planets.sort((a, b) => a.name.localeCompare(b.name));

  filteredPlanets = planets.filter((planet) => planet.name.toLowerCase().includes(filterByName));

  if (filterNumeric.length > 0) {
    filterNumeric.forEach(
      (filter) =>
        (filteredPlanets = filteredPlanets.filter((planet) => compareFilters(planet, filter))),
    );
  }

  console.log('planetas filtrados por ultimo', filteredPlanets);
  const objKeys = filteredPlanets.length > 0 ? Object.keys(filteredPlanets[0]) : null;

  return (
    <tbody>
      {filteredPlanets.map((planet) => (
        <tr key={planet.name}>
          {objKeys.map((key) => {
            return <td key={key}>{planet[key]}</td>;
          })}
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
});

TableBody.propTypes = {
  filterByName: PropTypes.string.isRequired,
  planets: PropTypes.arrayOf(PropTypes.object).isRequired,
  filterNumeric: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, null)(TableBody);
