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
    const { getPlanets, loading } = this.props;
    if (loading) return <h1>Loading</h1>;
    const headers = Object.keys(getPlanets[0]).filter(
      (item) => item !== 'residents',
    );
    console.log(headers);
    console.log(getPlanets);
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
          {getPlanets.map((planet) => (
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
});

const mapDispatchToProps = (dispatch) => ({
  requestPlanets: () => dispatch(fetchPlanets()),
});

Table.propTypes = {
  requestPlanets: PropTypes.func.isRequired,
  getPlanets: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
