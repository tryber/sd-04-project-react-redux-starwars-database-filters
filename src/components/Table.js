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

  applyNameFilter = (planetName, data) => {
    if (planetName !== '') {
      data = data.filter(
        planet => planet.name.toUpperCase().includes(planetName.toUpperCase()),
      );
    }
    return data;
  }

  applyNumFilter = (filters, data) => {
    if (typeof filters && filters.length > 0) {
      filters.forEach(({ column, comparison, value }) => {
        data = data.filter(currentPlanet => {
          switch (comparison) {
            case 'menor que':
              return currentPlanet[column] < Number(value);
            case 'maior que':
              return currentPlanet[column] > Number(value);
            case 'igual a':
              return Number(currentPlanet[column]) === Number(value);
            default:
              return false;
          }
        });
      });
    }
    return data;
  }

  render() {
    const {
      error, loading, planetName, data, numFilters,
    } = this.props;
    if (data.length !== 0) {
      const filteredResults = this.applyNumFilter(
        numFilters, this.applyNameFilter(planetName, data),
      );
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
  numFilters: PropTypes.arrayOf(
    PropTypes.shape({
      column: PropTypes.string,
      comparison: PropTypes.string,
      value: PropTypes.string,
    }),
  ).isRequired,
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
  numFilters: state.allFilters.filters.filterByNumericValues,
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
