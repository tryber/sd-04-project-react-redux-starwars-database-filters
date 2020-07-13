import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPlanets } from '../actions/apiRequests';

class Table extends Component {
  constructor(props) {
    super(props);
    this.filter = this.filter.bind(this);
  }

  componentDidMount() {
    const { requestPlanets } = this.props;
    requestPlanets();
  }

  filter(arr) {
    const { filterName, filterNumber } = this.props;
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

    return filtered;
  }

  render() {
    const { getPlanets, loading } = this.props;
    if (loading) return <h1>Loading</h1>;
    const headers = Object.keys(getPlanets[0]).filter(
      (item) => item !== 'residents',
    );
    return (
      <table>
        <thead>
          <tr>
            {headers.map((planetKey) => (
              <th key={planetKey}>{planetKey}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {this.filter(getPlanets).map((planet) => (
            <tr key={`${planet.name}${planet.rotation_period}`}>
              {headers.map((planetKey) => (
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
  loading: state.apiRequest.loading,
  filterName: state.filters.filterByName.name,
  filterNumber: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  requestPlanets: () => dispatch(fetchPlanets()),
});

Table.propTypes = {
  requestPlanets: PropTypes.func.isRequired,
  getPlanets: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
  filterName: PropTypes.string.isRequired,
  filterNumber: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
