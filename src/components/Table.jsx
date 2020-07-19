import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPlanets } from '../actions/apiRequests';

class Table extends Component {
  static dynamicSort(property, order) {
    const sortOrder = order === 'ASC' ? 1 : -1;
    return function (a, b) {
      let result = 0;
      if (a[property] < b[property]) {
        result = -1;
      } else if (a[property] > b[property]) {
        result = 1;
      }
      return result * sortOrder;
    };
  }

  constructor(props) {
    super(props);
    this.filter = this.filter.bind(this);
  }

  componentDidMount() {
    const { requestPlanets } = this.props;
    requestPlanets();
  }

  filter(arr) {
    const { filterName, filterNumber, filterOrder } = this.props;
    let filtered = [];
    filtered =
      filterName === ''
        ? arr
        : arr.filter((item) => item.name.includes(filterName));

    if (filterNumber.length > 0) {
      filterNumber.forEach((filter) => {
        if (filter.comparison === 'maior que') {
          filtered = filtered.filter(
            (planet) => +planet[filter.column] > +filter.value,
          );
        }
        if (filter.comparison === 'menor que') {
          filtered = filtered.filter(
            (planet) => +planet[filter.column] < +filter.value,
          );
        }
        if (filter.comparison === 'igual a') {
          filtered = filtered.filter(
            (planet) => +planet[filter.column] === +filter.value,
          );
        }
      });
    }

    filtered.sort(Table.dynamicSort(filterOrder.column, filterOrder.sort));

    return filtered;
  }

  render() {
    const { getPlanets, loading, tableHeaders } = this.props;
    if (loading) return <h1>Loading</h1>;
    return (
      <table>
        <thead>
          <tr>
            {tableHeaders.map((planetKey) => (
              <th key={planetKey}>{planetKey}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {this.filter(getPlanets).map((planet) => (
            <tr key={`${planet.name}${planet.rotation_period}`}>
              {tableHeaders.map((planetKey) => (
                <td key={`${planet.name}${planet[planetKey]}`}>
                  {planet[planetKey]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  getPlanets: state.apiRequest.data,
  tableHeaders: state.apiRequest.headers,
  loading: state.apiRequest.loading,
  filterName: state.filters.filterByName.name,
  filterNumber: state.filters.filterByNumericValues,
  filterOrder: state.filters.order,
});

const mapDispatchToProps = (dispatch) => ({
  requestPlanets: () => dispatch(fetchPlanets()),
});

Table.propTypes = {
  requestPlanets: PropTypes.func.isRequired,
  getPlanets: PropTypes.arrayOf(PropTypes.object).isRequired,
  tableHeaders: PropTypes.arrayOf(PropTypes.string).isRequired,
  loading: PropTypes.bool.isRequired,
  filterName: PropTypes.string.isRequired,
  filterNumber: PropTypes.arrayOf(PropTypes.object).isRequired,
  filterOrder: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
