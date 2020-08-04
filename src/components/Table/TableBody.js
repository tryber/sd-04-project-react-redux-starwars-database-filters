import React, { Component } from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';

import filterFunc from '../functions/filterFunc';

class TableBody extends Component {
  render() {
    const { data, name, numericValues } = this.props;
    const filteredPlanets = filterFunc(data, name, numericValues);
    return (
      <tbody>
        {filteredPlanets.map((planet) => (
          <tr key={planet.name}>
            <td>{planet.name}</td>
            <td>{planet.rotation_period}</td>
            <td>{planet.orbital_period}</td>
            <td>{planet.diameter}</td>
            <td>{planet.climate}</td>
            <td>{planet.gravity}</td>
            <td>{planet.terrain}</td>
            <td key={planet.surface_water}>{planet.surface_water}</td>
            <td>{planet.population}</td>
            <td>
              {planet.films.map((film) => (
                <span key={film}>{film}</span>
              ))}
            </td>
            <td>{planet.created}</td>
            <td>{planet.edited}</td>
          </tr>
        ))}
      </tbody>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.dataReducer.data,
  name: state.filters.filterByName.name,
  numericValues: state.filters.filterByNumericValues,
  column: state.filters.order.column,
  sort: state.filters.order.sort,
});

export default connect(mapStateToProps)(TableBody);

TableBody.propTypes = {
  data: Proptypes.arrayOf(Proptypes.string).isRequired,
  name: Proptypes.string.isRequired,
  numericValues: Proptypes.string.isRequired,
};
