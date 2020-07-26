import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fetchPlanets from '../actions/fetchPlanets';
import RenderTable from './renderTable';
// import { compare, sortData } from '../usingSort';

class Table extends Component {
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
