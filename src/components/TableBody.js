import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { filter, orderAscDesc } from '../service/filter';

import './Tabela.css';

const TableBody = (props) => {
  const { data, texto, filtros, column, sort } = props;

  const filtered = filter(data, texto, filtros);

  return (
    <tbody>
      {orderAscDesc(filtered, column, sort).map((planet) => (
        <tr key={planet.name}>
          <td>{planet.name}</td> <td>{planet.climate}</td>{' '}
          <td>{planet.created}</td>
          <td>{planet.diameter}</td> <td>{planet.edited}</td>{' '}
          <td>{planet.gravity}</td>
          <td>{planet.orbital_period}</td> <td>{planet.population}</td>
          <td>{planet.rotation_period}</td> <td>{planet.surface_water}</td>
          <td>{planet.terrain}</td> <td>{planet.url}</td>{' '}
          <td>{planet.films}</td>
        </tr>
      ))}
    </tbody>
  );
};

const mapStateToProps = (state) => ({
  data: state.reducerGetApi.data,
  texto: state.filters.filterByName.name,
  filtros: state.filters.filterByNumericValues,
  column: state.filters.order.column.toLowerCase(),
  sort: state.filters.order.sort,
});

TableBody.propTypes = {
  data: PropTypes.string.isRequired,
  column: PropTypes.string.isRequired,
  sort: PropTypes.string.isRequired,
  texto: PropTypes.func.isRequired,
  filtros: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(TableBody);
