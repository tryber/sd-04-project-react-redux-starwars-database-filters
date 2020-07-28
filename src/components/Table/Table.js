import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Tabelas from './Tabelas';

function Table({ isLoading, data, searchBar, filtros, orderColumn, order }) {
  const allFilters = () => {
    const planets = data.filter((planet) => planet.name.includes(searchBar));
    if (filtros.length === 0) return planets;
    return filtros.reduce((acc, filtro) => {
      const { column, comparison, value } = filtro;
      return acc.filter((planet) => {
        switch (comparison) {
          case 'maior que':
            return Number(planet[column]) > Number(value);
          case 'menor que':
            return Number(planet[column]) < Number(value);
          case 'igual a':
            return Number(planet[column]) === Number(value);
          default:
            return false;
        }
      });
    }, planets);
  };

  const sortData = () => {
    const planets = allFilters();
    const filterColumn = orderColumn.toLowerCase();
    if (isNaN(planets[0][filterColumn])) {
      planets.sort((a, b) => (a[filterColumn] > b[filterColumn] ? 1 : -1));
    } else {
      planets.sort((a, b) => a[filterColumn] - b[filterColumn]);
    }
    if (order === 'DESC') planets.reverse();
    return planets;
  };

  if (isLoading) return <span>L O A D I N G . . . .</span>;
  const offResidents = Object.keys(data[0]).filter((e) => e !== 'residents');
  return (
    <div>
      <table>
        <thead>
          <tr>
            {offResidents.map((e, i) => (
              <th key={`${i + 1}`}>{e}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortData().map((planet, i) => (
            <Tabelas planet={planet} i={i} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

Table.propTypes = {
  data: PropTypes.shape({
    filter: PropTypes.func,
  }).isRequired,
  filtros: PropTypes.shape({
    column: PropTypes.string.isRequired,
    comparison: PropTypes.string.isRequired,
    length: PropTypes.number,
    reduce: PropTypes.func,
    value: PropTypes.string.isRequired,
  }).isRequired,
  isLoading: PropTypes.bool.isRequired,
  order: PropTypes.string.isRequired,
  orderColumn: PropTypes.shape({
    toLowerCase: PropTypes.func,
  }).isRequired,
  searchBar: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  isLoading: state.reducerFetch.isLoading,
  data: state.reducerFetch.data.results,
  searchBar: state.filters.filterByName.name,
  filtros: state.filters.filterByNumericValues,
  order: state.filters.order.sort,
  orderColumn: state.filters.order.column,
});

export default connect(mapStateToProps)(Table);
