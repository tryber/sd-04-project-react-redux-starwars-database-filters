import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPlanets } from '../actions';
import Filters from './Filters';
import Table from './Table';

class Home extends Component {
  componentDidMount() {
    const { planetsFetch } = this.props;
    planetsFetch();
    console.log(planetsFetch());
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
  planetsFetch: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isFetching: state.planets.isFetching,
});

const mapDispatchToProps = (dispatch) => ({
  planetsFetch: () => dispatch(fetchPlanets()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
