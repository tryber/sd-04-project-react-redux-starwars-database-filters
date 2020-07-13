import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import filterFunction from '../services/filterFunction';

const Table = ({ data, loading, filterValues, error, filterNumber, order }) => {
  if (loading) return <h3>Loading</h3>;
  if (error) return <h3>{error.message}</h3>;
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
          <th>Residents</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
        </tr>
      </thead>
      <tbody>
        {filterFunction(data, filterValues, filterNumber, order).map(
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
            residents,
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
              <td key={name + residents}>{residents}</td>
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

const mapState = (state) => {
  const { filterByName, filterByNumericValues, order } = state.filters;
  const { data, loading, error } = state.api;
  return {
    data,
    loading,
    error,
    filterValues: filterByName.name,
    filterNumber: filterByNumericValues,
    order,
  };
};

export default connect(mapState)(Table);

Table.defaultProps = {
  error: false,
};

Table.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.object]),
  ).isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool,
  filterValues: PropTypes.string.isRequired,
  filterNumber: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object]))
    .isRequired,
  order: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object]))
    .isRequired,
};
