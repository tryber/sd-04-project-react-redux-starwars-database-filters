import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import filterFunc from './functions/filterFunc';

class TableBody extends Component {
  render() {
    const { planets, name, NumericValues } = this.props;
    const data = filterFunc(planets, name, NumericValues);
    return (
      <tbody>
        {data.map((element) => (
          <tr key={element.name}>
            <td>{element.name}</td>
            <td>{element.rotation_period}</td>
            <td>{element.orbital_period}</td>
            <td>{element.diameter}</td>
            <td>{element.climate}</td>
            <td>{element.gravity}</td>
            <td>{element.terrain}</td>
            <td>{element.surface_water}</td>
            <td>{element.population}</td>
            <td>{element.films}</td>
            <td>{element.created}</td>
            <td>{element.edited}</td>
            <td>{element.url}</td>
          </tr>
        ))}
      </tbody>
    );
  }
}

const mapStateToProps = (state) => ({
  planets: state.getPlanets.data,
  name: state.filters.filterByName.name,
  NumericValues: state.filters.filterByNumericValues,
});

export default connect(mapStateToProps)(TableBody);

TableBody.propTypes = {
  planets: PropTypes.arrayOf(PropTypes.object).isRequired,
  name: PropTypes.string.isRequired,
  NumericValues: PropTypes.array.isRequired,
};
