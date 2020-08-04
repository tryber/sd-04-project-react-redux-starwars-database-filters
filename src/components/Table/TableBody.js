import React, { Component } from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';

import filterFunc from '../functions/filterFunc';
// import sortFunc from '../functions/sortFunc';

class TableBody extends Component {
  render() {
    const { data, name, numericValues } = this.props;
    const filteredPlanets = filterFunc(data, name, numericValues);
    // sortFunc(data, 'name', 'ASC');
    // filteredPlanets.sort((a, b) => a.name.localeCompare(b.name));
    return (
      <tbody>
        {filteredPlanets.map((planet) => (
          <tr key={planet.name}>
            {planet.name}
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
  // >fetching: state.fetching,
});

export default connect(mapStateToProps)(TableBody);

TableBody.propTypes = {
  data: Proptypes.arrayOf(Proptypes.string).isRequired,
  name: Proptypes.string.isRequired,
  numericValues: Proptypes.string.isRequired,
};
