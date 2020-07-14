import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Table.css';
import checkNamePlanet from '../helpers';

const THeadBody = ({ data, filterName }) => (
  <table>
    <thead>
      <tr>
        <th>name</th>
        <th>rotation_period</th>
        <th>orbital_period</th>
        <th>diameter</th>
        <th>climate</th>
        <th>gravity</th>
        <th>terrain</th>
        <th>surface_water</th>
        <th>population</th>
        <th>films</th>
        <th>created</th>
        <th>edited</th>
        <th>url</th>
      </tr>
    </thead>
    <tbody>
      <TBody data={data} filterName={filterName} />
    </tbody>
  </table>
);

const TBody = ({ data, filterName }) => data.filter((planet) =>
  checkNamePlanet(planet.name, filterName)).map((planet) => (
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
      <td>{planet.films}</td>
      <td>{planet.created}</td>
      <td>{planet.edited}</td>
      <td>{planet.url}</td>
    </tr>
  ));

const Table = ({ data, loading, filterName }) =>
  (loading ? <p>Loading...</p> :
  <div>
    <p>StarWars Datatable with Filters</p>
    <THeadBody data={data} filterName={filterName} />
  </div>
  );

const mapStateToProps = (state) => ({
  data: state.reducerData.data,
  loading: state.reducerData.loading,
  filterName: state.filters.filterByName.name,
});

export default connect(mapStateToProps)(Table);

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
  filterName: PropTypes.string.isRequired,
};

THeadBody.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
