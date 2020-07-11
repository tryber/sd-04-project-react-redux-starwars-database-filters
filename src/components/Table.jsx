import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPlanets } from '../actions/apiRequests';

class Table extends Component {
  componentDidMount() {
    const { requestPlanets } = this.props;
    requestPlanets();
  }

  render() {
    const { getPlanets, loading, filterName } = this.props;
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
          {getPlanets
            .filter((item) => item.name.includes(filterName))
            .map((planet) => (
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
  filterName: state.filters.filters.filterByName.name,
});

const mapDispatchToProps = (dispatch) => ({
  requestPlanets: () => dispatch(fetchPlanets()),
});

Table.propTypes = {
  requestPlanets: PropTypes.func.isRequired,
  getPlanets: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
  filterName: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
