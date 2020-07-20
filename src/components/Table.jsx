import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Table.css';

const usedColumns = [
  'name',
  'rotation_period',
  'orbital_period',
  'diameter',
  'climate',
  'gravity',
  'terrain',
  'surface_water',
  'population',
  'films',
  'created',
  'edited',
  'url',
];

const Table = ({ data, loading, filterName, filterComparison }) => {
  const filterPlanetsName = (array) => {
    if (filterName === '') return array;
    return array.filter((planet) => planet.name.toLowerCase().includes(filterName.toLowerCase()));
  };
  const arrayPlanets = filterPlanetsName(data);
  const filterPlanetsComparison = (array) => {
    if (filterComparison.length === 0) return array;
    return filterComparison.reduce((acc, crr) => {
      const { column, comparison, value } = crr;
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
    }, array);
  };
  if (loading) return <h1>Loading...</h1>;
  return (
    <div className="daniteste">
      <table>
        <thead>
          <tr>
            {usedColumns.map((key) => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filterPlanetsComparison(arrayPlanets).map((planet) => (
            <tr key={planet.diameter}>
              {usedColumns.map((key) => (
                <td key={key}>{planet[key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.loading,
  data: state.data,
  filterName: state.filters.filterByName.name,
  filterComparison: state.filters.filterByNumericValues,
});

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
  filterName: PropTypes.string.isRequired,
  filterComparison: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(Table);
