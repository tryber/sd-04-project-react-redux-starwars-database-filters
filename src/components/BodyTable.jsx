import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import filterFunc from './functions/FilterFunc';

class BodyTable extends Component {
  render() {
    const { data, name, numericValues, order } = this.props;
    // const filterName = data.filter((planet) => planet.name.includes(name));
    const filterData = filterFunc(data, name, numericValues, order.column, order.sort);

    return (
      <tbody>
        {filterData.map((planet) => (
          <tr key={planet.name}>
            {Object.keys(planet).map((information) => (
              <td key={information}>
                {information === 'films'
                  ? planet[information].map((film) => <span key={film}>{film}</span>)
                  : planet[information]}
                {planet[information]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

const mapState = (state) => ({
  data: state.getPlanets.data,
  name: state.filters.filterByName.name,
  numericValues: state.filters.filterByNumericValues,
  order: state.filters.order,
});

export default connect(mapState)(BodyTable);

BodyTable.propTypes = {
  numericValues: PropTypes.arrayOf(PropTypes.object).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  name: PropTypes.string.isRequired,
  order: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
};
