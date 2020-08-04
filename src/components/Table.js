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

  sortTableData = (data, { column, sort }) => {
    if (sort === 'DESC') {
      return data.sort((a, b) => Number(b[column]) - Number(a[column]));
    }
    if (sort === 'ASC') {
      return data.sort((a, b) => Number(a[column]) - Number(b[column]));
    }
    return false;
  };

  render() {
    const {
      error, loading, planetName, data, numFilters, orderSort,
    } = this.props;
    if (data.length !== 0) {
      const nameOrder = data.sort((a, b) => a.name.localeCompare(b.name));
      const filteredResults = this.applyNumFilter(
        numFilters, this.applyNameFilter(planetName, this.sortTableData(nameOrder, orderSort)),
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
  orderSort: PropTypes.shape({
    column: PropTypes.string,
    sort: PropTypes.string,
  }),
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
  numFilters: state.filters.filterByNumericValues,
  orderSort: state.filters.order,
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
