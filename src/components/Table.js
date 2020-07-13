import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Table.css';

const THeadBody = ({ data }) => (
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
      <TBody data={data} />
    </tbody>
  </table>
);

const TBody = ({ data }) =>
  data.map((planet) => (
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

const Table = ({ data, loading }) => {
  console.log(data, loading)
  return (loading ? <p>Loading...</p> :
    <div>
      <p>StarWars Datatable with Filters</p>
      <THeadBody data={data} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  data: state.reducerData.data,
  loading: state.reducerData.loading,
});

export default connect(mapStateToProps)(Table);

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
};

THeadBody.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
