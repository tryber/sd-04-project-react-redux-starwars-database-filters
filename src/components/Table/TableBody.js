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
        {filterName.map((data) => (
          <tr key={data.name}>
            {data.name}
            <td>{data.rotation_period}</td>
            <td>{data.orbitalPeriod}</td>
            <td>{data.diameter}</td>
            <td>{data.climate}</td>
            <td>{data.gravity}</td>
            <td>{data.terrain}</td>
            <td key={data.surface_water}>{data.surface_water}</td>
            <td>{data.population}</td>
            <td>
              {data.films.map((film) => (
                <span key={film}>{film}</span>
              ))}
            </td>
            <td>{data.created}</td>
            <td>{data.edited}</td>
          </tr>
        ))}
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
