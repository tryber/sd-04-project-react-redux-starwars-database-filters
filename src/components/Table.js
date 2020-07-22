import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import getAPIData, { filterByName } from '../actions';
import TableData from './TableData';

export class Table extends Component {
  componentDidMount() {
    const { getData } = this.props;
    getData('planets');
  }

  render() {
    const {
      error, loading, nameFilter, planetName,
    } = this.props;
    let { data: { results } } = this.props;
    if (results) {
      if (planetName !== '') {
        results = results.filter(
          planet => planet.name.toUpperCase().includes(planetName.toUpperCase()),
        );
      }
      return (
        <div>
          <h1>StarWars Datatable Filters</h1>
          <input
            type="text"
            value={planetName}
            data-testid="name-filter"
            onChange={e => nameFilter(e.target.value)}
          />
          <TableData results={results} />
        </div>
      );
    }
    if (loading) {
      return <div>Loading...</div>;
    }
    return <div>{error.message}</div>;
  }
}

Table.propTypes = {
  data: PropTypes.shape({
    results: PropTypes.shape({
      map: PropTypes.func,
      filter: PropTypes.func,
    }),
  }),
  error: PropTypes.shape({
    message: PropTypes.string,
  }),
  getData: PropTypes.func,
  loading: PropTypes.bool,
  nameFilter: PropTypes.func,
  planetName: PropTypes.string,
};

Table.defaultProps = {
  getData: () => console.log('Should be a function'),
  data: {
    results: null,
  },
};

const mapDispatchToProps = dispatch => ({
  getData: endpoint => dispatch(getAPIData(endpoint)),
  nameFilter: event => dispatch(filterByName(event)),
});

const mapStateToProps = state => ({
  data: state.generateTable.data,
  error: state.generateTable.error,
  loading: state.generateTable.loading,
  planetName: state.filters.filterByName.name,
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
