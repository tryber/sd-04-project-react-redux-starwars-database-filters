import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import fetchPlanets from '../action';
import Table from './Table';
import FilterPlanet from '../services/filterPlanets';
import FilterValues from '../services/filterValues';
import RemoveFilter from '../services/removeFilter';

class Home extends Component {
  componentDidMount() {
    const { getPlanets } = this.props;
    getPlanets();
  }

  render() {
    return (
      <div>
        <h2>StarWars DataTable</h2>
        <Table />
        <FilterPlanet />
        <FilterValues />
        <RemoveFilter />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.getPlanets.isFetching,
});

const mapDispatchToProps = (dispatch) => ({
  getPlanets: () => dispatch(fetchPlanets()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

Home.propTypes = {
  getPlanets: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};
