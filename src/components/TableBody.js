import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import orderFuncAsc from './orderFuncAsc';
import orderFuncDesc from './orderFuncDesc';

class TableBody extends Component {
  render() {
    const { planets, name, NumericValues, sort, columnSort } = this.props;
    const data =
      sort === 'ASC'
        ? orderFuncAsc(planets, name, NumericValues, columnSort)
        : orderFuncDesc(planets, name, NumericValues, columnSort);
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
  columnSort: state.filters.order.column,
  sort: state.filters.order.sort,
});

export default connect(mapStateToProps)(TableBody);

TableBody.defaultProps = {
  columnSort: 'Name',
  sort: 'ASC',
};

TableBody.propTypes = {
  planets: PropTypes.arrayOf(PropTypes.object).isRequired,
  name: PropTypes.string.isRequired,
  NumericValues: PropTypes.arrayOf(PropTypes.object).isRequired,
  columnSort: PropTypes.string.isRequired,
  sort: PropTypes.string.isRequired,
};
