import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const TableBody = ({ planets, filter, filterNumeric }) => {
  console.log('planetas não filtrados', planets);

  const filteredPlanets = planets.filter((planet) => planet.name.toLowerCase().includes(filter));

  const columnFilter = filterNumeric.map((filter) => filter.column);

  const valueFilter = filterNumeric.map((filter) => filter.value);

  const comparisonResult = filterNumeric.map((filter) => {
    switch (filter.comparison) {
      case 'maior que':
        return '>';
      case 'menor que':
        return '<';
      case 'igual a':
        return '===';
      default:
        return null;
    }
  });

  console.log('columnFilter: ', columnFilter);
  console.log('comparison', comparisonResult);
  console.log('value: ', valueFilter);

  console.log('filtros', filterNumeric);

  const filteredNumeric = filteredPlanets.filter((planet, index) => {
    console.log('index do filteredNumeric', index);

    return planet[columnFilter] > valueFilter;
  });

  console.log('filtros com map', filteredNumeric);

  return (
    <tbody>
      {filteredPlanets.map((planet) => (
        <tr key={planet.name}>
          <td>{planet.name}</td>
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
