import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Table from '../components/Table';
import { fetchPlanets } from '../actions';
import FilterByName from '../components/FilterName';
import FilterValues from '../components/FilterValues';

export class Home extends Component {
  componentDidMount() {
    const { fetchPlanet } = this.props;
    fetchPlanet();
  }
  render() {
    const { isLoading } = this.props;
    if (isLoading) return <h3>Loading...</h3>;
    return (
      <div>
        <h1>Star Wars Planets</h1>
        <FilterByName />
        <FilterValues />
        <Table />
      </div>
    );
  }
}

const mapState = (state) => ({
  isLoading: state.getPlanets.isLoading,
});

const mapDispatch = (dispatch) => ({
  fetchPlanet: () => dispatch(fetchPlanets()),
});
export default connect(mapState, mapDispatch)(Home);

Home.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  fetchPlanet: PropTypes.func.isRequired,
};
