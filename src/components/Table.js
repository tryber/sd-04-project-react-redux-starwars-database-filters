import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import filters from '../services/filters';

const Table = ({ data, loading, vFilter, nFilter }) => {
  if (loading) return <h3>Loading</h3>;
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
        </tr>
      </thead>
      <tbody>
        {filters(data, vFilter, nFilter).map(
          ({
            name,
            rotation_period: rotationPeriod,
            orbital_period: orbitalPeriod,
            diameter,
            climate,
            gravity,
            terrain,
            surface_water: surfaceWater,
            population,
            films,
            created,
            edited,
          }) => (
            <tr key={name}>
              <td key={name + name}>{name}</td>
              <td key={name + rotationPeriod}>{rotationPeriod}</td>
              <td key={name + orbitalPeriod}>{orbitalPeriod}</td>
              <td key={name + diameter}>{diameter}</td>
              <td key={name + climate}>{climate}</td>
              <td key={name + gravity}>{gravity}</td>
              <td key={name + terrain}>{terrain}</td>
              <td key={name + surfaceWater}>{surfaceWater}</td>
              <td key={name + population}>{population}</td>
              <td key={name + films}>{films}</td>
              <td key={name + created}>{created}</td>
              <td key={name + edited}>{edited}</td>
            </tr>
          ),
        )}
      </tbody>
    </table>
  );
};

const mapStateToProps = (state) => {
  const { filterByName, filterByNumericValues } = state.filterReducer;
  const { data, loading, error } = state.swReducer;
  return {
    data,
    loading,
    error,
    vFilter: filterByName.name,
    nFilter: filterByNumericValues,
  };
};

export default connect(mapStateToProps)(Table);

Table.defaultProps = {
  error: false,
};

Table.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.object])
  ).isRequired,
  loading: PropTypes.bool.isRequired,
  vFilter: PropTypes.string.isRequired,
  nFilter: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object]))
    .isRequired,
};
