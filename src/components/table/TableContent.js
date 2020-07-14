import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const TableContent = ({ data }) => (

  <tbody>
    {data.map((planet) => (
      <tr key={planet.name}>
        <td>{planet.name}</td>
        <td>{planet.rotation_period}</td>
        <td>{planet.orbital_period}</td>
        <td>{planet.diameter}</td>
        <td>{planet.climate}</td>
        <td>{planet.gravity}</td>
        <td>{planet.terrain}</td>
        <td>{planet.surface_water}</td>
        <td>{planet.films}</td>
        <td>{planet.created}</td>
        <td>{planet.edited}</td>
        <td>{planet.url}</td>
      </tr>
    ))}
  </tbody>
);

const mapStateToProps = (state) => ({
  data: state.reducerAPI.data,
});

TableContent.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(TableContent);
