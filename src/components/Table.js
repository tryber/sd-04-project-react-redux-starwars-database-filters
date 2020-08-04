import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import getAPIData from '../actions';
import TableData from './TableData';
import TableHeader from './TableHeader';

class Table extends Component {
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
      error, loading, planetName, data,
    } = this.props;
    if (data.length !== 0) {
      const filteredResults = this.applyNameFilter(planetName, data);
      return (
        <div>
          <TableHeader />
          <TableData results={filteredResults} />
        </div>
      );
    }
    if (loading) {
      return (
        <div>
          <TableHeader />
          <p>Loading...</p>
        </div>
      );
    }
    return <div>{error.message}</div>;
  }
}

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
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
  planetName: state.allFilters.filters.filterByName.name,
  numComparison: state.allFilters.filters.filterByNumericValues.comparison,
  numColumn: state.allFilters.filters.filterByNumericValues.column,
  numValue: state.allFilters.filters.filterByNumericValues.value,
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
