import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Tabelas from './Tabelas';

function Table({ isLoading, data, searchBar, filtros }) {
  const allFilters = () => {
    let planets = [];
    if (filtros.length > 0) {
      filtros.forEach(({ column, comparison, value }) => {
        planets = planets.filter((planet) => {
          if (comparison === 'menor') return Number(planet[column]) < Number(value);
          if (comparison === 'igual') return Number(planet[column]) === Number(value);
          if (comparison === 'maior') return Number(planet[column]) > Number(value);
          return null;
        });
      });
    }
    planets = data.filter((e) => e.name.toLowerCase().includes(searchBar));
    console.log(planets);
    return planets;
  };

  if (isLoading) return <span>L O A D I N G . . .</span>;
  const planetsFiltred = allFilters();
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

Table.defaultProps = {
  data: [],
};

Table.propTypes = {
  data: PropTypes.shape({
    filter: PropTypes.func,
    map: PropTypes.func,
  }),
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
