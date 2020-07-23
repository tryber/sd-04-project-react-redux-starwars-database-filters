import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import getAPIData from '../actions';
import TableData from './TableData';
import { TableHeader } from './TableHeader';

export class Table extends Component {
  componentDidMount() {
    const { getData } = this.props;
    getData('planets');
  }

  applyNameFilter = (planetName, results) => {
    if (planetName !== '') {
      results = results.filter(
        planet => planet.name.toUpperCase().includes(planetName.toUpperCase()),
      );
    }
    return results;
  }

  applyNumFilter = (planetName, results) => {
    if (planetName !== '') {
      results = results.filter(
        planet => planet.name.toUpperCase().includes(planetName.toUpperCase()),
      );
    }
    return results;
  }

  render() {
    const {
      error, loading, planetName, data: { results },
    } = this.props;
    if (results) {
      const filteredResults = this.applyNameFilter(planetName, results);
      return (
        <div>
          <TableHeader />
          <TableData results={filteredResults} />
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
  planetName: PropTypes.string,
};

const mapDispatchToProps = dispatch => ({
  getData: endpoint => dispatch(getAPIData(endpoint)),
});

const mapStateToProps = state => ({
  data: state.generateTable.data,
  error: state.generateTable.error,
  loading: state.generateTable.loading,
  planetName: state.filters.filterByName.name,
  numComparison: state.filters.filterByNumericValues.comparison,
  numColumn: state.filters.filterByNumericValues.column,
  numValue: state.filters.filterByNumericValues.value,
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
