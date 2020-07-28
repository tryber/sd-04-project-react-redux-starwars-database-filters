import PropTypes from 'prop-types';
import { fetchPlanets } from '../actions';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import Filters from './Filters';
import Table from './Table';

class Home extends Component {
  componentDidMount() {
    const { fetchPlanets } = this.props;
    fetchPlanets();
    console.log(fetchPlanets());
  }

  render() {
    const { isFetching } = this.props;
    if (isFetching) return <h1>Loading...</h1>;
    return (
      <div>
        <h3>StarWars Datatable with Filters</h3>
        <Filters />
        <Table />
      </div>
    );
  }
}

Home.propTypes = {
  fetchPlanets: PropTypes.func,
  isFetching: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isFetching: state.planets.isFetching,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPlanets: () => dispatch(fetchPlanets()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
