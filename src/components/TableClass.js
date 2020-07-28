import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const numericKeys = [
  'rotation_period',
  'orbital_period',
  'diameter',
  'surface_water',
  'population',
];

class TableClass extends Component {
  filterData() {
    const { data, numericFilters, name } = this.props;
    let filteredData = [];
    if (name === '') filteredData = data;
    if (name !== '') {
      filteredData = data.filter((planet) => planet.name.includes(name));
    }
    if (numericFilters.length > 0) {
      numericFilters.forEach((filter) => {
        if (filter.comparison === 'maior que') {
          filteredData = filteredData.filter(
            (planet) => planet[filter.column] > Number(filter.value),
          );
        }
        if (filter.comparison === 'menor que') {
          filteredData = filteredData.filter(
            (planet) => planet[filter.column] < Number(filter.value),
          );
        }
        if (filter.comparison === 'igual a') {
          filteredData = filteredData.filter(
            (planet) => planet[filter.column] === filter.value,
          );
        }
      });
    }
    return filteredData;
  }

  compareValues() {
    const { column, sort } = this.props;
    return function compare(a, b) {
      let val1 = a[column];
      let val2 = b[column];

      if (numericKeys.includes(column)) {
        val1 = Number(a[column]);
        val2 = Number(b[column]);
      }

      let comparison = 0;
      if (val1 > val2) {
        comparison = 1;
      }
      if (val1 < val2) {
        comparison = -1;
      }
      return sort === 'DESC' ? comparison * -1 : comparison;
    };
  }

  render() {
    const {
      data, name, numericFilters, column, sort,
    } = this.props;
    return (
      <table>
        <thead>
          <tr>
            {Object.keys(data[0])
              .filter((element) => element !== 'residents')
              .map((key) => (
                <th key={key}>{key}</th>
              ))}
          </tr>
        </thead>
        <tbody>
          {this.filterData(data, name, numericFilters)
            .sort(this.compareValues(column, sort))
            .map(({ residents, ...planet }) => (
              <tr key={planet.name}>
                {Object.values(planet).map((value) => (
                  <td key={value}>{value}</td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.starWarsAPIReducer.data,
  name: state.filters.filterByName.name,
  numericFilters: state.filters.filterByNumericValues,
  column: state.filters.order.column.toLowerCase(),
  sort: state.filters.order.sort,
});

TableClass.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      diameter: PropTypes.string,
      rotation_period: PropTypes.string,
      orbital_period: PropTypes.string,
      gravity: PropTypes.string,
      population: PropTypes.string,
      climate: PropTypes.string,
      terrain: PropTypes.string,
      surface_water: PropTypes.string,
      films: PropTypes.array,
      url: PropTypes.string,
      created: PropTypes.string,
      edited: PropTypes.string,
    }).isRequired,
  ).isRequired,
  numericFilters: PropTypes.arrayOf(
    PropTypes.shape({
      column: PropTypes.string,
      comparison: PropTypes.string,
      value: PropTypes.string,
    }).isRequired,
  ).isRequired,
  column: PropTypes.string.isRequired,
  sort: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(TableClass);
