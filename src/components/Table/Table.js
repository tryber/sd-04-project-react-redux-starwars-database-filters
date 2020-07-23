import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Tabelas from './Tabelas';

function Table({ isLoading, data, searchBar, filtros }) {
  const allFilters = (filtro) => {
    const planets = data.filter((elem) => elem.name.includes(searchBar));
    if (filtro.length !== 0) {
      return filtro.reduce(
        (acc, index) => {
          switch (index.comparison) {
            case 'maior que':
              return planets.filter((elem) => Number(elem[index.column]) > Number(index.value));
            case 'menor que':
              return planets.filter((elem) => Number(elem[index.column]) < Number(index.value));
            case 'igual a':
              return planets.filter((elem) => Number(elem[index.column]) === Number(index.value));
            default:
              return planets;
          }
        },
        [planets],
      );
    }
    return planets;
  };

  if (isLoading) return <span>L O A D I N G . . . .</span>;
  const planetsFiltred = allFilters(filtros);
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
          {planetsFiltred.map((planet, i) => (
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
    value: PropTypes.string.isRequired,
    comparison: PropTypes.string.isRequired,
  }).isRequired,
  isLoading: PropTypes.bool.isRequired,
  searchBar: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  isLoading: state.reducerFetch.isLoading,
  data: state.reducerFetch.data.results,
  searchBar: state.filters.filterByName.name,
  filtros: state.filters.filterByNumericValues,
});

export default connect(mapStateToProps)(Table);
