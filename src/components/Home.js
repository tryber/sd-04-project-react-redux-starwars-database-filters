import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPlanets } from '../actions';
import Table from './Table';
import FilterPlanet from './FilterPlanet';
import FilterValues from './FilterValues';

class Home extends Component {

  componentDidMount() {
    const { getPlanets } = this.props;
    getPlanets();
  }

  render() {
    if (this.props.loading) return <h2>Loading...</h2>;
    return (
      <div>
        <h2>StarWars DataTable</h2>
        <FilterPlanet />
        <FilterValues />
        <Table />
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
