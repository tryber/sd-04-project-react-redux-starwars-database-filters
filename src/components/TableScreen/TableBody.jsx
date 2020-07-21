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

const TableBody = ({ planets, filter, filterNumeric }) => {
  console.log('planetas não filtrados', planets);

  let filteredPlanets = planets.sort((a, b) => a.name.localeCompare(b.name));

  filteredPlanets = planets.filter((planet) => planet.name.toLowerCase().includes(filter));

  if (filterNumeric.length > 0) {
    console.log('filterNumeric', filterNumeric);
    filterNumeric.forEach(
      (filter) =>
        (filteredPlanets = filteredPlanets.filter((planet) => compareFilters(planet, filter))),
    );
  }
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
    </tbody>
  );
};

const mapStateToProps = (state) => ({
  planets: state.reducerAPI.data,
  filter: state.filters.filterByName.name,
  filterNumeric: state.filters.filterByNumericValues,
});

TableBody.propTypes = {
  filter: PropTypes.string.isRequired,
  planets: PropTypes.arrayOf(PropTypes.object).isRequired,
  filterNumeric: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, null)(TableBody);
