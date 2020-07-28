import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import sortAsc from '../function/sortAscFilter';
import sortDesc from '../function/sortDescFilter';

class TableBody extends Component {
  render() {
    const { planets, name, numeric, column, sort } = this.props;
    const data = sort === 'ASC' ? sortAsc(planets, name, numeric, column) : sortDesc(planets, name, numeric, column)
    return (
      <tbody>
        {data.map((item) => (
          <tr key={item.name}>
            <td>{item.name}</td>
            <td>{item.population}</td>
            <td>{item.climate}</td>
            <td>{item.diameter}</td>
            <td>{item.gravity}</td>
            <td>{item.orbital_period}</td>
            <td>{item.rotation_period}</td>
            <td>{item.surface_water}</td>
            <td>{item.terrain}</td>
            <td>{item.films.map((film => (
              <p key={film}>{film}</p>
            )))}</td>
            <td>{item.edited}</td>
            <td>{item.created}</td>
            <td>{item.url}</td>
          </tr>
        ))}
      </tbody>
    );
  }
}

const mapStateToProps = (state) => ({
  planets: state.planetReducer.planets.planets,
  name: state.filters.filterByName.name,
  numeric: state.filters.filterByNumericValues,
  column: state.filters.order.column,
  sort: state.filters.order.sort,
});

TableBody.propTypes = {
  planets: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      population: PropTypes.string,
      climate: PropTypes.string,
      diameter: PropTypes.string,
      gravity: PropTypes.string,
      orbital_period: PropTypes.string,
      rotation_period: PropTypes.string,
      surface_water: PropTypes.string,
      terrain: PropTypes.string,
    }),
  ).isRequired,
  name: PropTypes.string.isRequired,
  numeric: PropTypes.arrayOf(
    PropTypes.shape({
      columns: PropTypes.string,
      comparison: PropTypes.string,
      values: PropTypes.number,
    }),
  ).isRequired,
  column: PropTypes.string.isRequired,
  sort: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(TableBody);
