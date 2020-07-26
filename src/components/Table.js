import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fetchPlanets from '../actions/fetchPlanets';
import RenderTable from './renderTable';
// import { compare, sortData } from '../usingSort';

class Table extends Component {
  // orderingPlanets = ({ planetsData, searchText, filterByNumericValues, order }) => {
  //   const objKeys = planetsData.length !== 0 ? Object.keys(planetsData[0]).filter((keys) => keys !== 'residents') : [];
  //     let planets = planetsData.sort((a, b) => a.name.localeCompare(b.name));
  //     if (order.column !== 'Name') {
  //       planets = sortData(planets, order);
  //     }
  //     if (typeof filterByNumericValues && filterByNumericValues.length > 0) {
  //       filterByNumericValues.forEach((filter) => {
  //         const { column, comparison, value } = filter;
  //         planets = planets.filter((planeta) => compare(planeta, column, comparison, value));
  //       });
  //     }
  //     if (searchText !== '') {
  //       planets = planets.filter(
  //         (planet) =>
  //           planet.name.includes(searchText.toUpperCase()) ||
  //           planet.name.includes(searchText.toLowerCase()),
  //       );
  //     }
  //     return (
  //       <table className="table">
  //         <Table objKeys={objKeys} planets={planets} />
  //       </table>
  //     );
  //  };

  componentDidMount() {
    const { filteredPlanets: fetch } = this.props;
    fetch();
  }

  test() {
    const { filteredPlanets } = this.props;
    return filteredPlanets;
  }

  render() {
    const { planetsData, filteredPlanets, isFetching } = this.props;
    if (isFetching) return <p>Loading...</p>;
    const headerTitles = planetsData ? Object.keys(planetsData[0]) : [];
    return <RenderTable tableHeaderTitles={headerTitles} filteredPlanets={filteredPlanets} />;
    }
  }

const mapStateToProps = (state) => ({
  planetsData: state.filters.planetsData,
  isFetching: state.filters.isFetching,
  filteredPlanets: state.filters.filteredPlanets,
  nameToFilter: state.filters.filterByName.name,
  filterByNumericValues: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPlanets: () => dispatch(fetchPlanets()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);

Table.propTypes = {
  planetsData: PropTypes.arrayOf(PropTypes.object).isRequired,
  // fetchPlanets: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  filteredPlanets: PropTypes.arrayOf(PropTypes.object).isRequired,
};
