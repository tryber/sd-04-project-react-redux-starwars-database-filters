import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import getAPIData from '../actions';

export class Table extends Component {
  componentDidMount() {
    const { getData } = this.props;
    getData('planets');
  }

  tableHeader = () => (
    <tr>
      <th>name</th>
      <th>rotation_period</th>
      <th>orbital_period</th>
      <th>diameter</th>
      <th>climate</th>
      <th>gravity</th>
      <th>terrain</th>
      <th>surface_water</th>
      <th>population</th>
      <th>films</th>
      <th>created</th>
      <th>edited</th>
      <th>url</th>
    </tr>
  );

  renderTable = () => {
    const { data } = this.props;
    return data.map((planet, i) => (
      <tr key={i}>
        <td>{planet.name}</td>
        <td>{planet.rotation_period}</td>
        <td>{planet.orbital_period}</td>
        <td>{planet.diameter}</td>
        <td>{planet.climate}</td>
        <td>{planet.gravity}</td>
        <td>{planet.terrain}</td>
        <td>{planet.surface_water}</td>
        <td>{planet.population}</td>
        <td>{planet.films}</td>
        <td>{planet.created}</td>
        <td>{planet.edited}</td>
        <td>{planet.url}</td>
      </tr>
    ));
  };

  render() {
    const { error, loading } = this.props;
    if (error) {
      return <div>{error.message}</div>;
    }
    if (loading) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <h1>StarWars Datatable Filters</h1>
        <table>
          {this.tableHeader()}
          {this.renderTable()}
        </table>
      </div>
    );
  }
}

Table.propTypes = {
  data: PropTypes.shape({
    map: PropTypes.func,
  }),
  error: PropTypes.shape({
    message: PropTypes.string,
  }),
  getData: PropTypes.func,
  loading: PropTypes.bool,
};

const mapDispatchToProps = dispatch => ({
  getData: endpoint => dispatch(getAPIData(endpoint)),
});

const mapStateToProps = state => ({
  data: state.generateTable.data,
  error: state.generateTable.error,
  loading: state.generateTable.loading,
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
