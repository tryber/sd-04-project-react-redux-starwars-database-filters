import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FiltersFunc from './Function';

const dataOrganization = (planets, name, numericValues, order) => {
  const data = FiltersFunc(planets, name, numericValues, order);
  const sorter = data.sort((actual, before) => {
    let asc = '';
    switch (order.column) {
      case 'name':
        asc = before.name.localeCompare(actual.name);
        return order.sort === 'ASC' ? asc : asc * -1;
      case 'rotation_period':
        asc = actual.rotation_period - before.rotation_period;
        return order.sort === 'ASC' ? asc : asc * -1;
      case 'orbital_period':
        asc = actual.orbital_period - before.orbital_period;
        return order.sort === 'ASC' ? asc : asc * -1;
      case 'diameter':
        asc = actual.diameter - before.diameter;
        return order.sort === 'ASC' ? asc : asc * -1;
      case 'climate':
        asc = actual.climate.localeCompare(before.climate);
        return order.sort === 'ASC' ? asc : asc * -1;
      case 'gravity':
        asc = actual.gravity.localeCompare(before.gravity);
        return order.sort === 'ASC' ? asc : asc * -1;
      case 'terrain':
        asc = actual.terrain.localeCompare(before.terrain);
        return order.sort === 'ASC' ? asc : asc * -1;
      case 'surface_water':
        asc = actual.surface_water - before.surface_water;
        return order.sort === 'ASC' ? asc : asc * -1;
      case 'population':
        asc = actual.population - before.population;
        return order.sort === 'ASC' ? asc : asc * -1;
      case 'residents':
        asc = actual.residents.localeCompare(before.residents);
        return order.sort === 'ASC' ? asc : asc * -1;
      case 'films':
        asc = actual.films.localeCompare(before.films);
        return order.sort === 'ASC' ? asc : asc * -1;
      case 'created':
        asc = actual.created - before.created;
        return order.sort === 'ASC' ? asc : asc * -1;
      case 'edited':
        asc = actual.edited - before.edited;
        return order.sort === 'ASC' ? asc : asc * -1;
      default:
        asc = actual.name.localeCompare(before.name);
        return order.sort === 'ASC' ? asc : asc * -1;
    }
  });
  return sorter;
};

class TableBody extends Component {
  render() {
    const {
      planets, name, numericValues, order,
    } = this.props;
    return (
      <tbody>
        {dataOrganization(planets, name, numericValues, order).map((planet) => (
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
  }
}

export const propsRepetidas = {
  column: PropTypes.string,
  comparison: PropTypes.string,
  value: PropTypes.string,
};

TableBody.propTypes = {
  planets: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      orbital_period: PropTypes.string,
      diameter: PropTypes.string,
      climate: PropTypes.string,
      gravity: PropTypes.string,
      terrain: PropTypes.string,
      surface_water: PropTypes.string,
      population: PropTypes.string,
    }),
  ).isRequired,
  name: PropTypes.string.isRequired,
  numericValues: PropTypes.arrayOf(PropTypes.shape(propsRepetidas)).isRequired,
  order: PropTypes.shape({
    column: PropTypes.string,
    sort: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  planets: state.getPlanets.data,
  name: state.filters.filterByName.name,
  numericValues: state.filters.filterByNumericValues,
  order: state.filters.order,
});

export default connect(mapStateToProps)(TableBody);
