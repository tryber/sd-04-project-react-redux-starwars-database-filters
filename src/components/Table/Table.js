import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Tabelas from './Tabelas';
import sortData from '../../services/SortData';

function Table({ isLoading, data, searchBar, filtros, orderColumn, order }) {
  const allFilters = (dataPlanets) => {
    const planets = dataPlanets.filter((planet) => planet.name.includes(searchBar));
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

  if (isLoading) return <span>L O A D I N G . . . . . </span>;
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
          {sortData(allFilters(data), orderColumn, order).map((planet, i) => (
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
