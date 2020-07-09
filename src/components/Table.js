import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPlanets } from '../actions';

class Table extends Component {
  componentDidMount() {
    const { getPlanets } = this.props;
    getPlanets();
  }

  render() {
    const { data, isFetching } = this.props;
    if (isFetching) return <p>Loading...</p>;
    const tableTitles = data[0] ? Object.keys(data[0]) : [];
    return (
      <table>
        <thead>
          <tr>
            {tableTitles
              .filter((title) => title !== 'residents')
              .map((title) => (
                <th key={title}>{title}</th>
              ))}
          </tr>
        </thead>
        <tbody>
          {data.map((planet) => (
            <tr key={planet.name}>
              {Object.values(planet)
                .filter((_, index) => index !== 9)
                .map((value) => (
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
  data: state.planetsReducer.data,
  isFetching: state.planetsReducer.isFetching,
});

const mapDispatchToProps = (dispatch) => ({
  getPlanets: () => dispatch(fetchPlanets()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  getPlanets: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
};
