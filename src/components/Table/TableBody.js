import React, { Component } from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';
// import { createStore } from 'redux';

class TableBody extends Component {
  render() {
    const { data, name } = this.props;
    const filterName = data.filter((data) => data.name.includes(name));
    return (
      <tbody>
        {filterName.map(
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
              {name}
              <td>{rotationPeriod}</td>
              <td>{orbitalPeriod}</td>
              <td>{diameter}</td>
              <td>{climate}</td>
              <td>{gravity}</td>
              <td>{terrain}</td>
              <td key={surfaceWater}>{surfaceWater}</td>
              <td>{population}</td>
              <td>
                {films.map((film) => (
                  <span key={film}>{film}</span>
                ))}
              </td>
              <td>{created}</td>
              <td>{edited}</td>
            </tr>
          ),
        )}
      </tbody>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.dataReducer.data,
  name: state.filters.filterByName.name,
  // >fetching: state.fetching,
});

export default connect(mapStateToProps)(TableBody);

TableBody.propTypes = {
  data: Proptypes.arrayOf(Proptypes.string).isRequired,
  name: Proptypes.string.isRequired,
};
